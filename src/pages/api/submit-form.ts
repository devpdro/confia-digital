import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

interface FormData {
    financingType: string;
    amount: string;
    companyName: string;
    cnpj: string;
    responsibleName: string;
    position: string;
    phone: string;
    email: string;
    monthlyRevenue: string;
    activityTime: string;
    agreeTerms: boolean;
}

// Configuração do transporter de email
const createTransporter = () => {
    return nodemailer.createTransport({
        service: 'gmail', // ou outro provedor
        auth: {
            user: process.env.EMAIL_USER || 'seu-email@gmail.com',
            pass: process.env.EMAIL_PASS || 'sua-senha-app'
        }
    });
};

// Função para formatar os dados em HTML
const formatEmailHTML = (data: FormData) => {
    const formatCurrency = (value: string) => {
        const numericValue = parseInt(value.replace(/\D/g, '')) / 100;
        return new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
        }).format(numericValue);
    };

    const getFinancingTypeLabel = (value: string) => {
        const types: { [key: string]: string } = {
            'receivables': 'Securitização de Recebíveis',
            'contracts': 'Antecipação de Contratos',
            'custom': 'Estruturação Customizada'
        };
        return types[value] || value;
    };

    const getRevenueLabel = (value: string) => {
        const revenues: { [key: string]: string } = {
            'up-to-100k': 'Até R$ 100K',
            '100k-500k': 'R$ 100K - R$ 500K',
            '500k-2m': 'R$ 500K - R$ 2M',
            '2m-10m': 'R$ 2M - R$ 10M',
            'above-10m': 'Acima de R$ 10M'
        };
        return revenues[value] || value;
    };

    const getActivityTimeLabel = (value: string) => {
        const times: { [key: string]: string } = {
            'less-than-1': 'Menos de 1 ano',
            '1-3-years': '1-3 anos',
            '3-10-years': '3-10 anos',
            'more-than-10': 'Mais de 10 anos'
        };
        return times[value] || value;
    };

    return `
        <h2>Nova Simulação de Securitização</h2>
        <p><strong>Data/Hora:</strong> ${new Date().toLocaleString('pt-BR')}</p>
        
        <h3>Dados da Operação</h3>
        <p><strong>Tipo de Securitização:</strong> ${getFinancingTypeLabel(data.financingType)}</p>
        <p><strong>Valor Necessário:</strong> ${formatCurrency(data.amount)}</p>
        
        <h3>Dados da Empresa</h3>
        <p><strong>Nome da Empresa:</strong> ${data.companyName}</p>
        <p><strong>CNPJ:</strong> ${data.cnpj}</p>
        <p><strong>Faturamento Mensal:</strong> ${getRevenueLabel(data.monthlyRevenue)}</p>
        <p><strong>Tempo de Atividade:</strong> ${getActivityTimeLabel(data.activityTime)}</p>
        
        <h3>Dados do Responsável</h3>
        <p><strong>Nome:</strong> ${data.responsibleName}</p>
        <p><strong>Cargo:</strong> ${data.position}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Telefone:</strong> ${data.phone}</p>
        
        <h3>Termos</h3>
        <p><strong>Aceite dos Termos:</strong> ${data.agreeTerms ? 'Sim' : 'Não'}</p>
        
        <hr>
        <p><em>Email enviado automaticamente pelo sistema de simulação da Confia Capital.</em></p>
    `;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    if (req.method !== 'POST') {
        return res.status(405).json({ message: 'Método não permitido' });
    }

    try {
        const formData: FormData = req.body;

        // Validação básica
        if (!formData.email || !formData.companyName || !formData.cnpj) {
            return res.status(400).json({ 
                message: 'Campos obrigatórios não preenchidos',
                success: false 
            });
        }

        console.log('Dados recebidos:', formData);

        // Enviar email com os dados do formulário
        try {
            const transporter = createTransporter();
            
            const mailOptions = {
                from: process.env.EMAIL_USER || 'seu-email@gmail.com',
                to: 'contato@confiacapital.com.br', // Email de destino
                subject: `Nova Simulação - ${formData.companyName}`,
                html: formatEmailHTML(formData),
                replyTo: formData.email
            };

            await transporter.sendMail(mailOptions);
            console.log('Email enviado com sucesso!');
            
        } catch (emailError) {
            console.error('Erro ao enviar email:', emailError);
            // Continua o processo mesmo se o email falhar
        }

        return res.status(200).json({
            message: 'Formulário enviado com sucesso!',
            success: true,
            data: {
                id: Date.now(), // ID temporário
                timestamp: new Date().toISOString()
            }
        });

    } catch (error) {
        console.error('Erro ao processar formulário:', error);
        return res.status(500).json({
            message: 'Erro interno do servidor',
            success: false
        });
    }
}