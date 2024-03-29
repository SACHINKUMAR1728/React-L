import React from 'react';
import { useId } from 'react';

// InputBox component is a reusable component that can be used to create an input box with a label and a currency selection dropdown.
// label: Label for the input box.
// amount: Current value of the amount.
// onAmountChange: Function to be called when the amount value changes.
// onCurrencyChange: Function to be called when the currency selection changes.
// currencyOptions: An array of currency options.
// selectCurrency: Default selected currency.
// amountDisabled: Boolean flag to disable the amount input.
// currencyDisabled: Boolean flag to disable the currency selection dropdown.
// className: Additional CSS classes to be applied to the component.

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
    className = "",
}) {
    const amountinputId = useId();


    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
            <div className="w-1/2">
                <label htmlFor={amountinputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountinputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}
                    disabled={currencyDisabled}
                    onChange={(e) => onCurencyChange && onCurencyChange(e.target.value)}
                >
                    {currencyOptions.map((Currency) => (

                        <option key={Currency} value={Currency}>
                            {Currency}
                        </option>
                    )
                    )}
                </select>
                
            </div>
        </div>
    );
}

export default InputBox;