import tw from 'tailwind-styled-components'
interface IFormRow {
    children: React.ReactNode
    className?: string
    errMsg?: string
}
function FormRow({ children, className, errMsg }: IFormRow): JSX.Element {
    return (
        <FormRowTw className={`${className || ''}`}>
            {children}
            {errMsg && <ErrMsgTw>{errMsg}</ErrMsgTw>}
        </FormRowTw>
    )
}

const FormRowTw = tw.div`
    relative
    flex
    flex-col
    py-10
`

const ErrMsgTw = tw.p`
    text-orange
`

export default FormRow
