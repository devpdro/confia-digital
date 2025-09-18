import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

// Inicializa o cliente Resend com a chave API da variável de ambiente
const resend = new Resend(process.env.RESEND_API_KEY);

// Função para formatar valores monetários
const formatCurrency = (value: string): string => {
  const numericValue = parseInt(value.replace(/\D/g, '')) / 100;
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(numericValue);
};

// Função para formatar o CNPJ
const formatCNPJ = (cnpj: string): string => {
  return cnpj.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d)/, '$1/$2')
    .replace(/(\d{4})(\d)/, '$1-$2');
};

// Função para formatar o telefone
const formatPhone = (phone: string): string => {
  return phone.replace(/\D/g, '')
    .replace(/(\d{2})(\d)/, '($1) $2')
    .replace(/(\d{5})(\d)/, '$1-$2');
};

// Mapeia os valores de faturamento mensal para texto legível
const monthlyRevenueMap: Record<string, string> = {
  'up-to-100k': 'Até R$ 100K',
  '100k-500k': 'R$ 100K - R$ 500K',
  '500k-2m': 'R$ 500K - R$ 2M',
  '2m-10m': 'R$ 2M - R$ 10M',
  'above-10m': 'Acima de R$ 10M'
};

// Mapeia os valores de tempo de atividade para texto legível
const activityTimeMap: Record<string, string> = {
  'less-than-1': 'Menos de 1 ano',
  '1-3-years': '1-3 anos',
  '3-10-years': '3-10 anos',
  'more-than-10': 'Mais de 10 anos'
};

// Mapeia os tipos de financiamento para texto legível
const financingTypeMap: Record<string, string> = {
  'receivables': 'Securitização de Recebíveis',
  'contracts': 'Antecipação de Contratos',
  'custom': 'Estruturação Customizada'
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Apenas aceita método POST
  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Método não permitido' });
  }

  try {
    const {
      financingType,
      amount,
      companyName,
      cnpj,
      responsibleName,
      position,
      phone,
      email,
      monthlyRevenue,
      activityTime,
      agreeTerms
    } = req.body;

    // Cria o HTML do email
    const emailHtml = `
      <html>
        <head>
          <style>
            body {
              font-family: Arial, sans-serif;
              line-height: 1.6;
              color: #333;
            }
            .container {
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
              border: 1px solid #ddd;
              border-radius: 5px;
            }
            .header {
              background-color: #003366;
              color: white;
              padding: 15px;
              text-align: center;
              border-radius: 5px 5px 0 0;
            }
            .content {
              padding: 20px;
            }
            .footer {
              background-color: #f5f5f5;
              padding: 15px;
              text-align: center;
              font-size: 12px;
              border-radius: 0 0 5px 5px;
            }
            table {
              width: 100%;
              border-collapse: collapse;
            }
            th, td {
              padding: 10px;
              text-align: left;
              border-bottom: 1px solid #ddd;
            }
            th {
              background-color: #f2f2f2;
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>Nova Solicitação de Proposta</h1>
            </div>
            <div class="content">
              <p>Uma nova solicitação de proposta foi recebida através do formulário do site:</p>
              
              <table>
                <tr>
                  <th>Tipo de Securitização</th>
                  <td>${financingTypeMap[financingType] || financingType}</td>
                </tr>
                <tr>
                  <th>Valor Solicitado</th>
                  <td>${formatCurrency(amount)}</td>
                </tr>
                <tr>
                  <th>Nome da Empresa</th>
                  <td>${companyName}</td>
                </tr>
                <tr>
                  <th>CNPJ</th>
                  <td>${formatCNPJ(cnpj)}</td>
                </tr>
                <tr>
                  <th>Nome do Responsável</th>
                  <td>${responsibleName}</td>
                </tr>
                <tr>
                  <th>Cargo</th>
                  <td>${position}</td>
                </tr>
                <tr>
                  <th>Telefone</th>
                  <td>${formatPhone(phone)}</td>
                </tr>
                <tr>
                  <th>Email</th>
                  <td>${email}</td>
                </tr>
                <tr>
                  <th>Faturamento Mensal</th>
                  <td>${monthlyRevenueMap[monthlyRevenue] || monthlyRevenue}</td>
                </tr>
                <tr>
                  <th>Tempo de Atividade</th>
                  <td>${activityTimeMap[activityTime] || activityTime}</td>
                </tr>
              </table>
              
              <p>Por favor, entre em contato com o cliente o mais breve possível.</p>
            </div>
            <div class="footer">
              <p>Este é um email automático enviado pelo sistema da Confia Capital.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    // Envia o email usando o Resend
    const { data, error } = await resend.emails.send({
      from: `${process.env.RESEND_FROM_NAME || 'Confia Capital'} <${process.env.RESEND_FROM_EMAIL || 'no-reply@confiacapital.com.br'}>`,
      to: [email, process.env.DESTINATION_EMAIL || 'sac@confiacapital.com.br'], // Envia para o cliente e para a empresa
      subject: 'Recebemos sua solicitação de proposta - Confia Capital',
      html: emailHtml,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return res.status(500).json({ 
        success: false, 
        message: 'Erro ao enviar email. Por favor, tente novamente.' 
      });
    }

    // Responde com sucesso
    return res.status(200).json({ 
      success: true, 
      message: 'Formulário enviado com sucesso!',
      data
    });
  } catch (error) {
    console.error('Erro ao processar solicitação:', error);
    return res.status(500).json({ 
      success: false, 
      message: 'Erro interno do servidor. Por favor, tente novamente.' 
    });
  }
}