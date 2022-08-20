const calculateRectangleArea = function(length, width){
  if (length < 0 || width < 0){
    return undefined;
  }
  else{
    return length * width;
  }
}
const calculateTriangleArea = function(base, height){
  if (base < 0 || height < 0){
    return undefined;
  }
  else{
    return (base/2) * height;
  }
}
const calculateCircleArea = function(radius){
  if (radius < 0){
    return undefined;
  }
  else{
    return Math.PI * (Math.pow(radius, 2));
  }
}