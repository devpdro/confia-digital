import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import InputMask from 'react-input-mask';
import toast, { Toaster } from 'react-hot-toast';
import S from './request-form.module.scss';

// Função para validar CNPJ
const validateCNPJ = (cnpj: string): boolean => {
    const cleanCNPJ = cnpj.replace(/\D/g, '');
    
    if (cleanCNPJ.length !== 14) return false;
    if (/^(\d)\1{13}$/.test(cleanCNPJ)) return false;
    
    let sum = 0;
    let weight = 2;
    
    // Primeiro dígito verificador
    for (let i = 11; i >= 0; i--) {
        sum += parseInt(cleanCNPJ.charAt(i)) * weight;
        weight = weight === 9 ? 2 : weight + 1;
    }
    
    let digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    if (parseInt(cleanCNPJ.charAt(12)) !== digit) return false;
    
    // Segundo dígito verificador
    sum = 0;
    weight = 2;
    for (let i = 12; i >= 0; i--) {
        sum += parseInt(cleanCNPJ.charAt(i)) * weight;
        weight = weight === 9 ? 2 : weight + 1;
    }
    
    digit = sum % 11 < 2 ? 0 : 11 - (sum % 11);
    return parseInt(cleanCNPJ.charAt(13)) === digit;
};

// Função para formatar valor em reais
const formatCurrency = (value: string): string => {
    const numericValue = value.replace(/\D/g, '');
    const number = parseInt(numericValue) / 100;
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(number);
};

// Schema de validação com Yup
const schema = yup.object({
    financingType: yup.string().required('Campo obrigatório'),
    amount: yup.string()
        .required('Campo obrigatório')
        .test('min-value', 'Valor mínimo: R$ 50.000', (value) => {
            const numericValue = parseInt(value?.replace(/\D/g, '') || '0') / 100;
            return numericValue >= 50000;
        })
        .test('max-value', 'Valor máximo: R$ 50.000.000', (value) => {
            const numericValue = parseInt(value?.replace(/\D/g, '') || '0') / 100;
            return numericValue <= 50000000;
        }),
    companyName: yup.string()
        .required('Campo obrigatório')
        .min(3, 'Mínimo 3 caracteres'),
    cnpj: yup.string()
        .required('Campo obrigatório')
        .test('cnpj-valid', 'CNPJ deve conter 14 dígitos', (value) => {
            const cleanCNPJ = value?.replace(/\D/g, '') || '';
            return cleanCNPJ.length === 14;
        })
        .test('cnpj-algorithm', 'CNPJ inválido', (value) => {
            if (!value) return false;
            return validateCNPJ(value);
        }),
    responsibleName: yup.string()
        .required('Campo obrigatório')
        .min(3, 'Mínimo 3 caracteres'),
    position: yup.string()
        .required('Campo obrigatório')
        .min(2, 'Mínimo 2 caracteres'),
    phone: yup.string()
        .required('Campo obrigatório')
        .test('phone-valid', 'Telefone deve ter 11 dígitos', (value) => {
            const cleanPhone = value?.replace(/\D/g, '') || '';
            return cleanPhone.length === 11;
        }),
    email: yup.string()
        .required('Campo obrigatório')
        .email('Formato inválido')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Formato inválido'),
    monthlyRevenue: yup.string().required('Campo obrigatório'),
    activityTime: yup.string().required('Campo obrigatório'),
    agreeTerms: yup.boolean()
        .required('Campo obrigatório')
        .oneOf([true], 'Você deve aceitar os termos')
});

type FormData = yup.InferType<typeof schema>;

const RequestForm: React.FC = () => {
    const [isSubmitting, setIsSubmitting] = useState(false);
    
    const {
        register,
        handleSubmit,
        control,
        formState: { errors },
        setValue,
        watch,
        reset
    } = useForm<FormData>({
        resolver: yupResolver(schema),
        defaultValues: {
            financingType: 'receivables',
            amount: '50000000', // R$ 500.000,00
            companyName: 'Empresa Teste LTDA',
            cnpj: '57.696.336/0001-58',
            responsibleName: 'João Silva',
            position: 'Diretor Financeiro',
            phone: '(11) 99999-9999',
            email: 'joao@empresateste.com.br',
            monthlyRevenue: '500k-2m',
            activityTime: '3-10-years',
            agreeTerms: true
        }
    });
    
    const handlePartnerConnect = () => {
        window.open('https://americafinanceira.com.br/formulario-seja-parceiro', '_blank');
    };

    const onSubmit = async (data: FormData) => {
        if (isSubmitting) return; // Previne múltiplos envios
        
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/submit-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            const result = await response.json();

            if (response.ok && result.success) {
                toast.success('Simulação enviada com sucesso! Nossa equipe entrará em contato em breve.', {
                    duration: 5000,
                    position: 'top-right',
                    style: {
                        background: '#10B981',
                        color: 'white',
                        fontWeight: '500'
                    }
                });
                reset(); // Limpa o formulário
            } else {
                toast.error(result.message || 'Erro ao enviar formulário. Tente novamente.', {
                    duration: 4000,
                    position: 'top-right'
                });
            }
        } catch (error) {
            console.error('Erro ao enviar formulário:', error);
            toast.error('Erro de conexão. Verifique sua internet e tente novamente.', {
                duration: 4000,
                position: 'top-right'
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section className={S.section}>
            <div className={S.container}>
                {/* Lado Esquerdo - Informações */}
                <div className={S.leftColumn}>
                    <div className={S.leftContent}>

                        <h1 className={S.title}>
                            Securitização rápida para o seu negócio.
                        </h1>

                        <ul className={S.benefitsList}>
                            <li className={S.benefitItem}>
                                <div className={S.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Análise em apenas alguns minutos</span>
                            </li>
                            <li className={S.benefitItem}>
                                <div className={S.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Liberação rápida após aprovação</span>
                            </li>
                            <li className={S.benefitItem}>
                                <div className={S.checkIcon}>
                                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <span>Não compromete seu score de crédito</span>
                            </li>
                        </ul>

                        <div className={S.trustBadges}>
                            <div className={S.badge}>
                                <span className={S.badgeText}>CVM</span>
                                <span className={S.badgeSubtext}>Autorizada</span>
                            </div>
                            <div className={S.badge}>
                                <span className={S.badgeText}>A+</span>
                                <span className={S.badgeSubtext}>Rating</span>
                            </div>
                            <div className={S.badge}>
                                <span className={S.badgeText}>★★★★★</span>
                                <span className={S.badgeSubtext}>Trustpilot</span>
                            </div>
                        </div>

                        <div className={S.disclaimer}>
                            <p>Sujeito à análise de crédito e aprovação. Termos e condições aplicáveis.
                                A Confia Capital é uma securitizadora devidamente autorizada pela CVM.</p>

                            <p>Todas as operações são estruturadas conforme regulamentação da CVM e demais órgãos competentes.
                                Os valores e condições apresentados são meramente ilustrativos e podem variar conforme análise de risco.</p>

                            <p>Este simulador tem caráter informativo. Para operações reais, consulte nossa equipe especializada.
                                Mantenha seus dados sempre atualizados para análises mais precisas e condições personalizadas.</p>
                        </div>
                    </div>
                </div>

                {/* Lado Direito - Formulário */}
                <div className={S.rightColumn}>
                    <div className={S.rightContent}>
                        <div className={S.contactInfo}>
                            Dúvidas? Ligue (19) 98106-2535
                        </div>
                        
                        <Toaster />

                        <form className={S.form} onSubmit={handleSubmit(onSubmit)}>
                            <div className={S.formGroup}>
                                <select 
                                    {...register('financingType')}
                                    className={`${S.input} ${errors.financingType ? S.inputError : ''}`}
                                >
                                    <option value="">Tipo de securitização</option>
                                    <option value="receivables">Securitização de Recebíveis</option>
                                    <option value="contracts">Antecipação de Contratos</option>
                                    <option value="custom">Estruturação Customizada</option>
                                </select>
                            </div>
                            
                            <div className={S.formGroup}>
                                <Controller
                                    name="amount"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <input
                                            type="text"
                                            value={value ? formatCurrency(value) : ''}
                                            onChange={(e) => {
                                                const numericValue = e.target.value.replace(/\D/g, '');
                                                onChange(numericValue);
                                            }}
                                            placeholder="Qual valor você precisa?"
                                            className={`${S.input} ${errors.amount ? S.inputError : ''}`}
                                        />
                                    )}
                                />
                                {errors.amount && <span className={S.errorMessage}>{errors.amount.message}</span>}
                            </div>
                            
                            <div className={S.formGroup}>
                                <input
                                    type="text"
                                    {...register('companyName')}
                                    placeholder="Nome da empresa"
                                    className={`${S.input} ${errors.companyName ? S.inputError : ''}`}
                                />
                                {errors.companyName && <span className={S.errorMessage}>{errors.companyName.message}</span>}
                            </div>
                            
                            <div className={S.formGroup}>
                                <Controller
                                    name="cnpj"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <InputMask
                                             mask="99.999.999/9999-99"
                                             value={value}
                                             onChange={onChange}
                                             placeholder="CNPJ da empresa"
                                             className={`${S.input} ${errors.cnpj ? S.inputError : ''}`}
                                             maskChar={null}
                                             alwaysShowMask={false}
                                         />
                                    )}
                                />
                                {errors.cnpj && <span className={S.errorMessage}>{errors.cnpj.message}</span>}
                            </div>
                            
                            <div className={S.formGroup}>
                                <input
                                    type="text"
                                    {...register('responsibleName')}
                                    placeholder="Nome do responsável"
                                    className={`${S.input} ${errors.responsibleName ? S.inputError : ''}`}
                                />
                                {errors.responsibleName && <span className={S.errorMessage}>{errors.responsibleName.message}</span>}
                            </div>
                            
                            <div className={S.formGroup}>
                                <input
                                    type="text"
                                    {...register('position')}
                                    placeholder="Seu cargo na empresa"
                                    className={`${S.input} ${errors.position ? S.inputError : ''}`}
                                />
                                {errors.position && <span className={S.errorMessage}>{errors.position.message}</span>}
                            </div>
                            
                            <div className={S.formGroup}>
                                <Controller
                                    name="phone"
                                    control={control}
                                    render={({ field: { onChange, value } }) => (
                                        <InputMask
                                             mask="(99) 99999-9999"
                                             value={value}
                                             onChange={onChange}
                                             placeholder="Telefone para contato"
                                             className={`${S.input} ${errors.phone ? S.inputError : ''}`}
                                             maskChar={null}
                                             alwaysShowMask={false}
                                         />
                                    )}
                                />
                                {errors.phone && <span className={S.errorMessage}>{errors.phone.message}</span>}
                            </div>
                            
                            <div className={S.formGroup}>
                                <input
                                    type="email"
                                    {...register('email')}
                                    placeholder="Email corporativo"
                                    className={`${S.input} ${errors.email ? S.inputError : ''}`}
                                />
                                {errors.email && <span className={S.errorMessage}>{errors.email.message}</span>}
                            </div>
                            
                            <div className={S.formGroup}>
                                <select 
                                    {...register('monthlyRevenue')}
                                    className={`${S.input} ${errors.monthlyRevenue ? S.inputError : ''}`}
                                >
                                    <option value="">Faturamento mensal</option>
                                    <option value="up-to-100k">Até R$ 100K</option>
                                    <option value="100k-500k">R$ 100K - R$ 500K</option>
                                    <option value="500k-2m">R$ 500K - R$ 2M</option>
                                    <option value="2m-10m">R$ 2M - R$ 10M</option>
                                    <option value="above-10m">Acima de R$ 10M</option>
                                </select>
                            </div>
                            
                            <div className={S.formGroup}>
                                <select 
                                    {...register('activityTime')}
                                    className={`${S.input} ${errors.activityTime ? S.inputError : ''}`}
                                >
                                    <option value="">Tempo de atividade</option>
                                    <option value="less-than-1">Menos de 1 ano</option>
                                    <option value="1-3-years">1-3 anos</option>
                                    <option value="3-10-years">3-10 anos</option>
                                    <option value="more-than-10">Mais de 10 anos</option>
                                </select>
                            </div>
                            
                            <div className={S.checkboxGroup}>
                                <label className={S.checkboxLabel}>
                                    <input
                                        type="checkbox"
                                        {...register('agreeTerms')}
                                        className={S.checkbox}
                                    />
                                    <span className={S.checkboxText}>
                                         Concordo com os <span className={S.link} onClick={() => window.open('/termos-de-uso', '_blank')}>Termos de Uso</span>, a <span className={S.link} onClick={() => window.open('/politica-de-privacidade', '_blank')}>Política de Privacidade</span> e o 
                                         compartilhamento de informações da Confia Capital com parceiros 
                                         de securitização terceirizados
                                     </span>
                                </label>
                            </div>
                            
                            <button 
                                type="submit" 
                                className={`${S.primaryButton} ${isSubmitting ? S.loading : ''}`} 
                                disabled={isSubmitting}
                            >
                                {isSubmitting ? (
                                    <>
                                        <span className={S.spinner}></span>
                                        Enviando...
                                    </>
                                ) : (
                                    'Solicitar Proposta'
                                )}
                            </button>
                            {errors.agreeTerms && <span className={S.errorMessage}>{errors.agreeTerms.message}</span>}
                            
                            <div className={S.separator}>
                                <span>OU</span>
                            </div>
                            
                            <button type="button" className={S.secondaryButton} onClick={handlePartnerConnect}>
                                 Seja Nosso Parceiro
                             </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default RequestForm;