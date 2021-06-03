import React, {Fragment} from 'react';
import {IntlProvider} from 'react-intl'
import {Locales} from './locales';
import messages from './messages/index'


const LangProvider = ({children, locale = Locales.ENGLISH}) => {
    return <IntlProvider
        locale={locale}
        textComponent={Fragment}
        messages={messages[locale]}
    >
        {children}
    </IntlProvider>
}

export default LangProvider
