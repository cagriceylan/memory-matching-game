
counter = 0;
const app7 = Vue.createApp({
    template: '',
    data(){
        return {
            isActive: "gamebtnactive",
            sayilar: [1,2,3,4,5,6,7,8,9,10,11,12],
            arr: [],
            arr_Black: ["black","black","black","black","black","black","black","black","black","black","black","black"],
            arr_bulunanResimler: [],
            arr_ikili: [],
            fark: 0,
            counter: 0,
            firstclick: true,

            html: '<p><span id="seconds">00</span>:<span id="tens">00</span></p>',
            htmlgame: 'oyun bitti',
            seconds: 00,
            tens: 00,
            Interval: '',
            appendTens: "",
            appendSeconds: ""
            
            
    }
    },
    methods:{
        renderHtml: function(index){
            if(this.firstclick)
            {   console.log(this.htmlgame);
                this.startTime();
                this.firstclick = false;
            }

            counter += 1;
            ayni = false;
            index1 = -1;
            index2 = -1;

            this.arr_Black[index] = this.arr[index];
            console.log("index:",index,"resimno:",this.arr_Black[index]);
            console.log(this.arr_bulunanResimler);

            if(counter == 2)
            {
                for(i=0; i < 12; i++)
                {
                    if(this.arr_Black[i] !== "black" && this.arr_bulunanResimler.includes(i) !== true)
                    {
                        console.log("i:", i);
                        if(index1 == -1)
                        {
                            index1 = i;
                        }
                        else if(index1 != -1 && index2 == -1){
                            index2 = i;
                        }

                    }
                }
                ayni = this.karsilastir(index1, index2);

                if(ayni)
                {
                    this.arr_bulunanResimler.push(index1);
                    this.arr_bulunanResimler.push(index2);
                    if(this.arr_bulunanResimler.length == 12)
                    {
                        this.stopTime();
                    }
                }



                index1 = -1;
                index2 = -1;

                console.log("ayni mi?", ayni);
                counter = 0;


                

            }

        },

        shuffle: function (array) {
            let currentIndex = array.length,  randomIndex;
            while (currentIndex != 0) {
    
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
              //console.log(currentIndex);
              [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];

            }
          
            return array;

          },

        karsilastir: function(index1, index2){

            fark = parseFloat(this.arr_Black[index1]) - parseFloat(this.arr_Black[index2]);
            console.log("fark",fark);
            if( fark == 6.0 || fark == -6.0)
            {
                console.log("eşit", fark);
                return true;
            }
            else{
                console.log("eşit değil", fark);
                setTimeout(()=>this.arr_Black[index1] = "black",300);
                setTimeout(()=>this.arr_Black[index2] = "black",300);
                return false;

            }
        },

        startTime: function(){

            clearInterval(this.Interval);
            this.Interval = setInterval(this.startTimer, 10);
        }, 

        stopTime: function(){
            clearInterval(this.Interval);
        },

        startTimer: function() {
        
            this.tens++; 
    
            if(this.tens <= 9){
                this.appendTens = "0" + this.tens;
            }

            if (tens > 9){
                this.appendTens = this.tens;
            
            } 

            if (this.tens > 99) {
              console.log("seconds");
              this.seconds++;
              this.html = '<p><span id="seconds">'+this.seconds+'</span>:<span id="tens">00</span></p>';
              this.appendSeconds = "0" + this.seconds;
              this.tens = 0;
              this.appendTens = "0" + 0;
            }

            if (this.seconds > 9){
                this.appendSeconds = this.seconds;
            }
          
          }
          
    },
    created(){
        this.arr = this.shuffle(this.sayilar);
    }
});
 
app7.mount('#kapsayici7');
