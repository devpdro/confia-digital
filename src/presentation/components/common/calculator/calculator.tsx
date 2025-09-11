import React, { useState, useMemo } from 'react';
import styles from './calculator.module.scss';

interface CalculatorState {
  valor: number;
  prazo: number;
  tipoRecebivel: string;
  rating: string;
  necessidade: string;
}

const Calculator: React.FC = () => {
  // Estados dos inputs
  const [state, setState] = useState<CalculatorState>({
    valor: 5000000, // R$ 5M inicial
    prazo: 60, // 60 dias inicial
    tipoRecebivel: 'duplicatas',
    rating: 'A',
    necessidade: 'capital-giro'
  });

  // Opções para os selects
  const tiposRecebivel = [
    { value: 'duplicatas', label: 'Duplicatas' },
    { value: 'cheques', label: 'Cheques' },
    { value: 'cartao-credito', label: 'Cartão' },
    { value: 'contratos-servico', label: 'Contratos' }
  ];

  const ratings = [
    { value: 'A', label: 'A', color: '#10B981' },
    { value: 'B', label: 'B', color: '#F59E0B' },
    { value: 'C', label: 'C', color: '#EF4444' }
  ];

  const necessidades = [
    { value: 'capital-giro', label: 'Capital de Giro' },
    { value: 'expansao', label: 'Expansão' },
    { value: 'quitacao-dividas', label: 'Quitação de Dívidas' }
  ];

  // Cálculo dos resultados em tempo real
  const resultados = useMemo(() => {
    // Taxas mensais por rating
    const taxas = {
      A: 0.018, // 1.8%
      B: 0.025, // 2.5%
      C: 0.032  // 3.2%
    };

    const taxaMensal = taxas[state.rating as keyof typeof taxas];
    const prazoMeses = state.prazo / 30;
    const descontoTotal = state.valor * taxaMensal * prazoMeses;
    const valorLiquido = state.valor - descontoTotal;
    const economiaFactoring = descontoTotal * 0.3; // 30% de economia vs factoring

    return {
      valorLiquido,
      taxaAplicada: taxaMensal * 100,
      descontoTotal,
      prazoLiberacao: '5-7 dias úteis',
      economiaFactoring
    };
  }, [state]);

  // Handlers para atualizar estado
  const updateState = (key: keyof CalculatorState, value: any) => {
    setState(prev => ({ ...prev, [key]: value }));
  };

  // Formatação de moeda
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      minimumFractionDigits: 2
    }).format(value);
  };

  // Formatação de percentual
  const formatPercentage = (value: number) => {
    return `${value.toFixed(1)}%`;
  };

  return (
    <div className={styles.container}>
      {/* Mockup do smartphone */}
      <div className={styles.phoneMockup}>
        {/* Moldura do celular */}
        <div className={styles.phoneFrame}>
          {/* Câmera/sensor */}
          <div className={styles.camera}></div>
          
          {/* Tela do app */}
          <div className={styles.phoneScreen}>
            
            {/* Header do app */}
            <div className={styles.appHeader}>
              <h1 className={styles.appTitle}>Securitização</h1>
              <div className={styles.statusBar}>
                <span className={styles.time}>9:41</span>
                <div className={styles.battery}></div>
              </div>
            </div>

            {/* Conteúdo principal do app */}
            <div className={styles.appContent}>
              
              {/* Resultado principal em destaque */}
              <div className={styles.mainResult}>
                <div className={styles.resultLabel}>Valor Líquido</div>
                <div className={styles.resultValue}>
                  {formatCurrency(resultados.valorLiquido)}
                </div>
                <div className={styles.resultSubtext}>
                  Liberação em {resultados.prazoLiberacao}
                </div>
              </div>

              {/* Controles do app */}
              <div className={styles.appControls}>
                
                {/* Slider de Valor */}
                <div className={styles.controlGroup}>
                  <label className={styles.controlLabel}>Valor dos Recebíveis</label>
                  <div className={styles.sliderContainer}>
                    <input
                      type="range"
                      min="500000"
                      max="50000000"
                      step="100000"
                      value={state.valor}
                      onChange={(e) => updateState('valor', parseInt(e.target.value))}
                      className={styles.slider}
                    />
                    <div className={styles.sliderValue}>
                      {formatCurrency(state.valor)}
                    </div>
                  </div>
                </div>

                {/* Slider de Prazo */}
                <div className={styles.controlGroup}>
                  <label className={styles.controlLabel}>Prazo Médio</label>
                  <div className={styles.prazoButtons}>
                    {[30, 60, 90, 120].map((prazo) => (
                      <button
                        key={prazo}
                        className={`${styles.prazoButton} ${
                          state.prazo === prazo ? styles.prazoButtonActive : ''
                        }`}
                        onClick={() => updateState('prazo', prazo)}
                      >
                        {prazo}d
                      </button>
                    ))}
                  </div>
                </div>

                {/* Tipo de Recebível */}
                <div className={styles.controlGroup}>
                  <label className={styles.controlLabel}>Tipo de Recebível</label>
                  <div className={styles.buttonGrid}>
                    {tiposRecebivel.map((tipo) => (
                      <button
                        key={tipo.value}
                        className={`${styles.gridButton} ${
                          state.tipoRecebivel === tipo.value ? styles.gridButtonActive : ''
                        }`}
                        onClick={() => updateState('tipoRecebivel', tipo.value)}
                      >
                        {tipo.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Rating */}
                <div className={styles.controlGroup}>
                  <label className={styles.controlLabel}>Rating da Empresa</label>
                  <div className={styles.ratingButtons}>
                    {ratings.map((rating) => (
                      <button
                        key={rating.value}
                        className={`${styles.ratingButton} ${
                          state.rating === rating.value ? styles.ratingButtonActive : ''
                        }`}
                        style={{
                          '--rating-color': rating.color
                        } as React.CSSProperties}
                        onClick={() => updateState('rating', rating.value)}
                      >
                        {rating.label}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Necessidade */}
                <div className={styles.controlGroup}>
                  <label className={styles.controlLabel}>Necessidade</label>
                  <div className={styles.buttonGrid}>
                    {necessidades.map((necessidade) => (
                      <button
                        key={necessidade.value}
                        className={`${styles.gridButton} ${
                          state.necessidade === necessidade.value ? styles.gridButtonActive : ''
                        }`}
                        onClick={() => updateState('necessidade', necessidade.value)}
                      >
                        {necessidade.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detalhes dos resultados */}
              <div className={styles.resultDetails}>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Taxa Aplicada</span>
                  <span className={styles.detailValue}>{formatPercentage(resultados.taxaAplicada)}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Desconto Total</span>
                  <span className={styles.detailValue}>{formatCurrency(resultados.descontoTotal)}</span>
                </div>
                <div className={styles.detailItem}>
                  <span className={styles.detailLabel}>Economia vs Factoring</span>
                  <span className={`${styles.detailValue} ${styles.savings}`}>{formatCurrency(resultados.economiaFactoring)}</span>
                </div>
              </div>

              {/* CTA do app */}
              <button className={styles.appCta}>
                Solicitar Análise Detalhada
              </button>
            </div>
          </div>
        </div>

        {/* Base do celular */}
        <div className={styles.phoneBase}></div>
      </div>
    </div>
  );
};

export default Calculator;
