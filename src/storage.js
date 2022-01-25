export default function StorageVerification() {
  function _storageAvailable(type) {
    let storage;
    try {
      storage = window[type];
      let x = '__storage_test__';
      storage.setItem(x, x);
      storage.removeItem(x);
      return true;
    } catch (e) {
      return (
        e instanceof DOMException &&
        (e.code =
          22 ||
          e.code === 1014 ||
          e.name === 'QuotaExceededError' ||
          e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
        storage &&
        storage.length !== 0
      );
    }
  }

  let promise = new Promise((resolve, reject) => {
    if (_storageAvailable('localStorage')) {
      resolve('Storage Available.');
    } else {
      reject('Storage Unavailable.');
    }
  });

  promise
    .then((val) => {
      console.log(val);
    })
    .catch((err) => {
      console.log(err);
    });
}
