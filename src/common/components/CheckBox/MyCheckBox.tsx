import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import style from './MyCheckBox.module.scss'

type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type MyButtonPropsType = DefaultButtonPropsType & {
    textColor?: string,
    disabled?: boolean,
}

const MyCheckBox: React.FC<MyButtonPropsType> = (
    {
        textColor, disabled,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {
    const finalClassName =
        disabled === true ? `${style.button} ${style.redText}`
            : `${style.button} 
    ${!textColor ? style.blueText
                : textColor === 'red' ? style.redText
                    : textColor === 'purple' ? style.purpleText
                        : textColor === 'green' ? style.greenText
                            : style.blueText
            }`

    return (
        <div className={style.checkbox}>
            <div className={style.checkbox__1}>
                <input id="checkbox1" type="checkbox"/>
                <label htmlFor="checkbox1">
                    <i className="material-icons">done</i>
                </label>
            </div>
        </div>
    )
}

export default MyCheckBox;