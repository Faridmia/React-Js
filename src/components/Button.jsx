import React from "react";

class Button extends React.Component {

    shouldComponentUpdate(nextProps) {
        const { change: currentChange, locale: currentLocal } = this.props;
        const { change: nextChange, locale: nextLocal } = nextProps;

        if( currentChange === nextChange && currentLocal === nextLocal ) {
            return false;
        }

        return true;
    }

    render() {
        const { change,locale } = this.props;
        return (
            <>
            <button type="button" onClick={ () => change(locale) }>
                {locale === 'bn-BD' ? 'change clock' : 'ঘড়ি পরিবর্তন করুন '}
            </button>
            {show && <p>Hello</p>}
            </>
        );
    }
}

export default Button;