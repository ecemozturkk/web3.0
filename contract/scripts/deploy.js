

const main = async () => {
  const Transactions = await hre.ethers.getContractFactory("Transactions"); // bu sözleşmenin örneklerini üretecek
  const transactions = await Transactions.deploy(); // örnek oluşturuldu

  await transactions.deployed(); // örnek blockchain'e yüklendi

  console.log("Transactions deployed to:", transactions.address); // deploy olunan contract adresi yazdır

}



const runMain = async () => {
  try {
    await main();
    process.exit(0); //process went successfully
  } catch (error) {
    console.error(error);
    process.exit(1); //process failed
  }
}

runMain();
