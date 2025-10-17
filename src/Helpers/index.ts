export function FormatCurrency( quantity : number) {

    return new Intl.NumberFormat('EN-US', {
        style: 'currency', currency : 'USD'       
    }).format(quantity)
}