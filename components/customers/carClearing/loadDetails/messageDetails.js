import CarClearingMessageLayout from "../../layout/CarClearingMessageLayout";

export default function MessagesComp({ children }) {
    return (
        <>
            <CarClearingMessageLayout>
                {children}
            </CarClearingMessageLayout>
        </>
    )
}