//function loadModel() {
//    return new Promise(function(resolve, reject) {
//      tf.loadModel('../tfjs/model_1/model.json').then(function(m) {
//        model = m;
//        fetch('../tfjs/model_1/model.json').then(function(res) {
//          res.json().then(function(json) {
//            modelClasses = json;
//            resolve();
//          });
//        });
//      }).catch(reject);
//    });
//  }






(async () => {
//    import * as tf from '@tensorflow/tfjs';
    const model = await tf.loadModel('../tfjs/model_1/model.json');
    //const model2 = await tf.loadModel('../tfjs/model_2/model.json');
});

var Data = [2001, 25, 71, 71, 2979, 2207, 24, 0.518, 0.397, 762, 1813, 325, 147, 183, 74, 4];
//if(document.getElementById('button').clicked == true)
//{
    var prediction = model.predict(Data);
   alert(prediction);
   console.log (prediction);
//}
