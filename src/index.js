class Qingstor{
  constructor(zoneId = 'pek3a', secretKey, accessKey, options) {
    this.zone = zoneId;
    this.secretKey = secretKey;
    this.accessKey = accessKey;
    this.options = options;

    console.log('here', this.zone, this.secretKey);
  }

  get message() {
    return `${this.text} ${this.name}!`
  }
  set message(text) {
    this.text = helpers.trim(text)
  }

  createBucket (name){

  }

}

export default Qingstor;

