let interviewList=[];
let rejectedList=[];
let currentStatus='all';

let totalCount=document.getElementById('total');
let interviewCount=document.getElementById('interview-number');
let rejectedCount=document.getElementById('rejected-number');
let checkingCount=document.getElementById('checking-number');
let allcards=document.getElementById('allcardsection');


function totalCalculate(){
   totalCount.innerText=allcards.children.length;
   interviewCount.innerText=interviewList.length;
   rejectedCount.innerText= rejectedList.length;
   checkingCount.innerText=allcards.children.length;
    

}
totalCalculate();

document.getElementById('btn-all').addEventListener('click',function(){
     allcards.classList.remove('hidden');
     interview.classList.add('hidden');
     rejected.classList.add('hidden');
     
    
})

document.getElementById('btn-interview').addEventListener('click',function(){
 
     allcards.classList.add('hidden');
     interview.classList.remove('hidden');
     rejected.classList.add('hidden');
     renderInterview();

    

     
    
     
})
document.getElementById('btn-rejected').addEventListener('click',function(){
 
     allcards.classList.add('hidden');
     interview.classList.add('hidden');
     rejected.classList.remove('hidden');
     renderRejected();

     
    

  
     
     
})

document.querySelector('main').addEventListener('click',function(event){
   
     if(event.target.classList.contains('interview-btn')){
          
         const parentNode= event.target.parentNode.parentNode;

          const mobile=parentNode.querySelector('.mobile').innerText;
          const dev=parentNode .querySelector('.dev').innerText;
          const remote=parentNode .querySelector('.remote').innerText;
          const full=parentNode .querySelector('.full').innerText;
          const salary=parentNode .querySelector('.salary').innerText;
          const app=parentNode .querySelector('.app').innerText;
          const build=parentNode .querySelector('.build').innerText;

          parentNode .querySelector('.app').innerText='interview'

         const cardInfo={
          mobile,
          dev,
          remote,
          full,
          salary,
          app:'interview',
          build,
         };

         const plantExist=interviewList.find(item=>item.mobile==cardInfo.mobile);
         if(!plantExist){
          interviewList.push(cardInfo);
         }

         rejectedList=rejectedList.filter(item=>item.mobile!=cardInfo.mobile);

         if(currentStatus='rejected-btn'){
          renderRejected();
         }
         totalCalculate();
         
        
     }
     else if(event.target.classList.contains('rejected-btn')){
          
         const parentNode= event.target.parentNode.parentNode;

          const mobile=parentNode.querySelector('.mobile').innerText;
          const dev=parentNode .querySelector('.dev').innerText;
          const remote=parentNode .querySelector('.remote').innerText;
          const full=parentNode .querySelector('.full').innerText;
          const salary=parentNode .querySelector('.salary').innerText;
          const app=parentNode .querySelector('.app').innerText;
          const build=parentNode .querySelector('.build').innerText;

          parentNode .querySelector('.app').innerText='rejected'

         const cardInfo={
          mobile,
          dev,
          remote,
          full,
          salary,
          app:'rejected',
          build,
         };

         const plantExist=rejectedList.find(item=>item.mobile==cardInfo.mobile);
         if(!plantExist){
          rejectedList.push(cardInfo);
         }

         interviewList=interviewList.filter(item=>item.mobile!=cardInfo.mobile);

         if(currentStatus='interview-btn'){
          renderInterview();
         }
         totalCalculate();
         
        
     }

});

let rejectedSection=document.getElementById('rejected');
     function renderRejected(){
       rejectedSection.innerHTML='';

         if(rejectedList.length===0){
        rejectedSection.innerHTML=`<div class="bg-white p-20 mb-3 ">
            <img class="mx-auto mb-3" src="./jobs.png" alt="">
            <h2 class="text-3xl font-bold text-center">No jobs available</h2>
            <p class="text-center text-gray-500 mt-1">Check back soon for new job oppourunities</p>
            </div>`;
            return;

         }

          


         for(let rejected of rejectedList){
          let div=document.createElement('div');


          div.innerHTML=`
            <div  class=" bg-white p-6 flex justify-between mb-5">
                <div >
                    <h2 class="mobile text-2xl font-semibold mb-1">${rejected.mobile}</h2>
                    <p class="dev text-gray-500">${rejected.dev}</p>
                    <div class="flex gap-2 text-gray-500 my-4">
                        <p class="remote">${rejected.remote}</p>
                        <p class="full">${rejected.full}</p>
                        <p class="salary">${rejected.salary}</p>
                    </div>
                    <p class="app  bg-sky-100 w-35 p-1.5 rounded-lg text-center font-medium text-lg">${rejected.app}</p>
                    <p class="build text-gray-500 pt-2 pb-4">${rejected.build}</p>
                    <button  class="btn btn-success btn-outline interview-btn">INTERVIEW</button>
                    <button  class="btn btn-error btn-outline rejected-btn">REJECTED</button>
                </div>
                <p><i class="fa-regular fa-trash-can"></i></p>

            </div>
          
          `;

          rejectedSection.appendChild(div);
         

     }
}
let interviewSection=document.getElementById('interview');
     function renderInterview(){
        interviewSection.innerHTML='';

        if(interviewList.length===0){
        interviewSection.innerHTML=`<div class="bg-white p-20 mb-3 ">
            <img class="mx-auto mb-3" src="./jobs.png" alt="">
            <h2 class="text-3xl font-bold text-center">No jobs available</h2>
            <p class="text-center text-gray-500 mt-1">Check back soon for new job oppourunities</p>
            </div>`;
            return;
        }

       
      
             

     for(let interview of interviewList){
          let div=document.createElement('div');

          div.innerHTML=`
            <div  class=" bg-white p-6 flex justify-between mb-6">
                <div >
                    <h2 class="mobile text-2xl font-semibold mb-1">${interview.mobile}</h2>
                    <p class="dev text-gray-500">${interview.dev}</p>
                    <div class="flex gap-2 text-gray-500 my-4">
                        <p class="remote">${interview.remote}</p>
                        <p class="full">${interview.full}</p>
                        <p class="salary">${interview.salary}</p>
                    </div>
                    <p class="app  bg-sky-100 w-35 p-1.5 rounded-lg text-center font-medium text-lg">${interview.app}</p>
                    <p class="build text-gray-500 pt-2 pb-4">${interview.build}</p>
                    <button  class="btn btn-success btn-outline interview-btn">INTERVIEW</button>
                    <button  class="btn btn-error btn-outline rejected-btn">REJECTED</button>
                </div>
                <p><i class="fa-regular fa-trash-can"></i></p>

            </div>
          
          `;

          interviewSection.appendChild(div);
          

     }
}



  const deleteButtons = document.querySelectorAll(".delete");

  deleteButtons.forEach(btn => {
    btn.addEventListener("click", function () {
      
      this.closest(".cards").remove();
       totalCalculate();
       

    });
    

  });

  const buttons=document.querySelectorAll('.toggle-btn');

  buttons.forEach(button=>{
    button.addEventListener('click',function(){

        buttons.forEach(btn=>btn.classList.remove('active'));
        this.classList.add('active');
    });
  });

  

