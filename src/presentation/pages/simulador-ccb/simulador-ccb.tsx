import { Meta, SimuladorCcb } from "src/presentation/components";

const SimuladorCcbPage = () => {
    return (
        <>
            <Meta
                title="Simulador de Liquidação CCB | Confia Capital"
                description="Importe sua CCB em PDF ou preencha os dados da operação para simular liquidação antecipada, saldo devedor e antecipação de parcelas com a precisão do Sistema Price."
            />
            <SimuladorCcb />
        </>
    );
};

export default SimuladorCcbPage;
