export const formatWalletAddress = (address: string) => {
  const firstPart = address.slice(0, 6);
  const secondPart = address.slice(address.length - 4, address.length);
  const formattedAddress = `${firstPart}...${secondPart}`;
  return formattedAddress;
};
