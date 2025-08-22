console.log("connected")

 let count=0;
const laodAllPost=async(catagory,istrue)=>
{

const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');

const posts= await res.json();



   const res2=await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${catagory}`);
    const data2=await res2.json();
    // console.log(data2.posts);

    if(istrue)
    {
 displayallpost(data2.posts,istrue);
 istrue=false;

    }
    else if(istrue==false)
    {
displayallpost(posts.posts);
    }
   



}

const displayallpost=(posts,istrue)=>
{


    if(posts.length<=0)
    {
        alert("please search with right Keywords");
      laodAllPost(null,false)

    }

//fort short using view count
posts=posts.sort((a,b)=>
{

let viewsa=a.view_count;
let viewsb=b.view_count;
return viewsb-viewsa;
    
})
// console.log(posts)





const cardsContainer=document.getElementById("cardhalf")

//   cardsContainer.addEventListener("click",cardsclick);
cardsContainer.innerHTML="";
posts.forEach(post => {
  
//  (isclicked)?console.log(post.title):"unknown";



const card=document.createElement("div");

// card.addEventListener("click",cardsclick);
card.id=`${post.id}`
     
card.classList="card  card-side bg-[#12132D0D] rounded-2xl py-10 px-10 mt-5 mb-5 md:flex flex-col items-center gap-y-5 md:flex-row md:items-start"
card.innerHTML=
`<figure class=" w-20 h-20 rounded-xl relative ">
    <img
      src="${post.image}"
      alt="Movie" class="ww-14h-14 object-cover rounded-xl " />

      ${ post.isActive ? ` <div class="bg-white w-5 h-5 rounded-full object-cover absolute
    top-0 right-0 flex justify-center items-center">
    <div class=" bg-green-600  w-4 h-4 rounded-full "></div>
  </div>` : ` <div class="bg-white w-5 h-5 rounded-full object-cover absolute
    top-0 right-0 flex justify-center items-center">
    <div class=" bg-red-500  w-4 h-4 rounded-full "></div>
  </div>` }
 
  </figure>


  <div class="pl-10 max-w-full">
<div class="flex gap-x-2 gap-y-1">
<div class="text-sm inter-medium">#${post.category}</div>
${!post.author?.name? "unknow" :  `<div class="text-sm inter-medium">Author :${post.author.name}</div>`}

</div>
<div class="pt-2 pb-5">
<div  class="post_title text-xl mulish-bold text-[#12132D] pb-1">${post.title}</div>


<div class="text-sm inter-regular tetx-[#12132D99]">${post.description}</div>

</div>
<hr class="border-1 w-[75%] border-dashed border-gray-500 mt-2 mb-5">
<div class=" pb-5 grid grid-cols-3 gap-x-2 justify-items-end">
    
<div class=" flex gap-x-5  justify-center ">
 <div class="flex gap-x-2 items-center max-w-fit">
      
<img  src="https://img.icons8.com/windows/32/comments--v1.png" alt="comments--v1" class="w-5 h-5 object-cover"/>

        <div class="text-sm text-[#12132D99]">${post.comment_count}</div>
       </div>
       
<div class="flex gap-x-2 items-center">
        <img src="https://img.icons8.com/forma-thin/50/visible.png" alt="visible" class="w-5 h-5 object-cover"/>
<div class="text-sm text-[#12132D99]">${post.view_count}</div>
       </div>
       <div class="flex gap-x-2 items-center">
<img src="https://img.icons8.com/wired/64/present.png" alt="present"  class="w-5 h-5 object-cover"/>
<div class="text-sm text-[#12132D99]">${post.posted_time}min</div>
       </div>
        
        
</div>

<div class=" col-span-2">
 <img width="20" height="20" src="https://img.icons8.com/ios-filled/50/40C057/feedback.png" alt="feedback" class=""/>
</div>
</div>
  </div>`

  const cardfull=document.getElementById("cardfull");



card.addEventListener("click",()=>
{
    // console.log(post.title)
   


    count=count+1;
    tittle(count);

let addingpost=document.createElement("div");

addingpost.classList="bg-[#fff] max-w-full rounded-2xl px-10 py-2 mt-4 mb-4 flex items-center justify-between gap-5"
addingpost.innerHTML=`



       <div class="text-md md:text-xl mulish-semibold text-[#12132D]">
${post.title}

       </div> 
       <div class="flex gap-x-3">
        <img src="https://img.icons8.com/forma-thin/50/visible.png" alt="visible" class="w-7 h-7 object-cover"/>
<div class="text-md text-[#12132D99]">${post.view_count}</div>
       </div>
    </div>
    
  

`



cardfull.appendChild(addingpost);




});









spinner(false);
 cardsContainer.appendChild(card);
});




}
laodAllPost()



 function tittle(count=0)
 {

 const title=document.getElementById("title");
  title.innerHTML=`
    

 <div class="flex justify-between gap-x-10 pb-5 ">
    <div class="mulish-bold text-[#12132D]">Title</div>
    <div class="inter-ragular text-[#12132D99] flex gap-x-1">
     <img src="images/icons/Frame.svg" alt="">
        Mark as read ${count}
    </div>
   </div>

  </div>
  
  `;

 }

tittle();


//for letest post

const loadLetestPost=async()=>
{
const res= await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
const letest=await res.json();
// console.log(letest);
displayLetestPost(letest)
}
loadLetestPost()

const displayLetestPost=(letest)=>
{

    const cards=document.getElementById("cards");


letest.forEach(letestpost=>{

  const card=  document.createElement("div");
card.classList="card bg-base-100 max-w-fit  shadow-md py-2 px-1 rounded-lg";

card.innerHTML=`
 <figure class="px-5 pt-5">
    <img
      src="${letestpost.cover_image}"
      alt="Shoes"
      class="rounded-xl" />
      
  </figure>
  
  <div class="px-10  flex flex-col gap-y-2">
    <div class="flex gap-x-2 items-center pt-5">
      
<img  src="https://img.icons8.com/windows/32/comments--v1.png" alt="comments--v1" class="w-5 h-5 object-cover"/>

${letestpost.author?.posted_date? `<div class='text-sm text-[#12132D99]'>${letestpost.author.posted_date}</div>`
:
`<div class='text-sm text-[#12132D99]'>No publish date</div>
`}



       </div>

     
    <h2 class="mulish-extrabold text-[#12132D] ">${letestpost.title}!!!</h2>
    <p class="text-[#12132D99] text-sm  ">${letestpost.description} </p>
    <div class="flex max-w-full pt-3 flex-row justify-center md:justify-start   ">
    <div class="w-10 h-10">
    <img
      src="${letestpost.profile_image}"
      alt="Movie" class="w-full h-full object-cover rounded-full"/>
    </div>
<div class="pl-3 ">
    <div class="mulish-bold text-sm">${letestpost.author.name}</div>
    ${letestpost.author?.designation ? `    <div class="mulish-regular text-xs text-[#12132D99] ">${letestpost.author.designation}</div>` 
    :
     ` <div class="mulish-regular text-xs text-[#12132D99] ">Unknown</div>`}

</div>
    </div>
  </div>


`
// console.log(letestpost);
cards.append(card);



// for(const card of cards)
// {
    
// }

})




}

// {
//     "cover_image": "https://i.ibb.co/VYGSkLz/pexels-jeshootscom-442576.jpg",
//     "profile_image": "https://i.ibb.co/z8zx95w/pexels-davide-de-giovanni-1649675.jpg",
//     "title": "Gaming Enthusiast Expert in Play",
//     "description": "Leading gaming expert with a wealth of knowledge and passion for all things gaming",
//     "author": {
//         "name": "John Doe",
//         "designation": "ROR Developer",
//         "posted_date": "29 January 2024"
//     }


 function searchengine(){
const searchinput=document.getElementById("searchinput");

// console.log("search");

spinner(true)
 const take=searchinput.value;
//  console.log("search",take);

laodAllPost(take,true);
searchinput.value="";

}
// laodAllPost("comedy",true);
laodAllPost(null,false)


const allA=document.querySelectorAll("a");

allA.forEach(btn=>{


btn.addEventListener("click",(e)=>
{
allA.forEach(btn=>btn.classList.remove("btn-color"))

e.currentTarget.classList.add("btn-color");
}
)

}
)

function spinner(isload)
{
   
    const spinner=document.getElementById("spinner");
    isload ? spinner.classList.remove("hidden"):spinner.classList.add("hidden")
}

 






//     document.querySelectorAll("a").forEach(btn=>
//     {

//        btn.addEventListener("click",(e)=>{
//  remove()
//             e.currentTarget.classList.add("btn-color");
//             console.log(e.currentTarget)

//   })
//     }
//     )

//     function remove()
//     {
//         document.querySelectorAll("a").forEach(btn=>
//     {

        
// btn.classList.remove("btn-color")
        

 

//     }

// )
//     }


// const cards=document.querySelectorAll(".card ")
// cards.forEach(card=>{
// card.addEventListener("click",(e)=>{


// e.currentTarget.classList.add("btn-color")

// })

// })
// console.log(cards)