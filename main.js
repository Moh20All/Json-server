//fetch
fetch("http://127.0.0.1:5500/database/user.json")
    .then(res=>res.json())
    .then(data=> {
      data.forEach(ele => {
        appendEl(ele);
      });
    })


// append function
function appendEl({Name,lastName,avatar,email,gender,job,Busy}){
    let body = document.getElementById("tbody");
    
    let li = document.createElement("li");

    li.innerHTML = `<li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50 object-cover" src="${avatar}" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">${Name+" "+lastName}</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">${email}</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">${job}</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">${(Busy.online)?"Online":`Last Seen ${Busy.LastSeen}`}</p>
    </div>
  </li>`
  body.append(li);
}


