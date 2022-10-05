import { FeedItem } from '../interfaces'

type Props = {
  data: FeedItem
}

function changeColor(id){

  const head_element = document.getElementById("head_"+id);
  const body_element = document.getElementById("body_"+id);

  var baseColor, secondColor;

 
  var randomNum = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  var Color = function(hue, sat, light) {

    this.minHue = 0;
    this.maxHue = 360;

    this.minSat = 75;
    this.maxSat = 100;

    this.minLight = 20;
    this.maxLight = 40;

    this.scaleLight = 15;

    this.hue = hue || randomNum(this.minHue, this.maxHue);
    this.sat = sat || randomNum(this.minSat, this.maxSat);
    this.light = light || randomNum(this.minLight, this.maxLight);

    this.hsl = 'hsl(' + this.hue + ', ' + this.sat + '%, ' + this.light + '%)';
  };

  Color.prototype.changeHue = function(hue, rotate) {
    return hue + rotate > this.maxHue ?
      (hue + rotate) - this.maxHue : hue + rotate;
  };

  Color.prototype.changeLight = function(light) {
    return light + this.scaleLight > this.maxLight ? this.maxLight : light + this.scaleLight;
  };

  var setColors = function() {
   
      baseColor = new Color(0, 0, 0);
    
      secondColor = new Color(
      baseColor.changeHue(baseColor.hue, randomNum(0,20)),
      baseColor.sat,
      baseColor.changeLight(baseColor.light));

  };
  setColors()
  head_element.style.color = (baseColor.hsl);
  body_element.style.color = (secondColor.hsl);
  };

  const style = {
    color: "white"
  };
 
 
  
  export default function ListItem({ data }: Props) {
    
  return(
    
  <div className="transition ease-in-out delay-150 hover:scale-110 duration-300 my-8 max-w-sm rounded-lg overflow-hidden shadow-2xl bg-white/50 hover:bg-white/70">
  <img className="w-full rounded-lg rounded-b-none" src={data.pictureLink}/>
  <div className="px-6 py-4 " >
    <div id={"head_"+data.id} className="font-bold text-xl mb-2 drop-shadow-md ">{data.name}</div>
    <p id={"body_"+data.id} className="text-gray-700 drop-shadow-md text-base">
    {data.body}
    </p>
  </div>
  <div className="px-6 pt-4 pb-2 ">
  <button id={data.id.toString()} onClick={() =>  changeColor(data.id)} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm shadow-xl font-semibold text-gray-700 mr-2 mb-2">#randomize</button>
       
    <span style={style}>
     <i className="fa-regular fa-lg fa-heart"></i>
    
      </span>
  </div>
  
     

</div>
  )

}

