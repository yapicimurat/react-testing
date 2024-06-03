

export default function Button({setToggle, btnText}) {


    return <button data-testid="button"
        onClick={() => setToggle(prev => !prev)}>
        {btnText}
    </button>
}