export const shortenAddress = (address) => `${address.slice(0,5)}...${address.slice(address.length-4)}`
//kart görüntüsünün içinde adresi kısaltmak için adresin ilk 5 karakterini ve son 4 karakterini alır