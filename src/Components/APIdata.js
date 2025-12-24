const data=async()=>{
  const response=awaitfetch('https://jsonplaceholder.typicode.com/posts')
  const result=await response.json();
  return result;
}
const show=data();
for (let i=0; i<show.length;i++){
  const ob=show[i];
}