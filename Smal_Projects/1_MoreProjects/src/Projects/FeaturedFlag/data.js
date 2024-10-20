const dummpyApiResponse = {
  showLigthAndDarkMode: true,
  showTicTacToeBoard: true,
  showModalPopUp: false,
  showQrCode: true,
};

function featuredFlagDataServiceCall() {
  return new Promise((resolve, reject) => {
    if (dummpyApiResponse) {
      setTimeout(() => {
        resolve(dummpyApiResponse);
      }, 1000);
    } else {
      reject('Error: No data found');
    }
  });
}

export default featuredFlagDataServiceCall;