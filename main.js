//fetch
fetch("https://randomuser.me/api/?results=5")
    .then(res=>res.json())
    .then(json=>{
        for (const key in json.results) {
  if ((json.results).hasOwnProperty(key)) {
    appendEl(json.results[key]);
    console.log(json.results[key]);
        }
    }})


// append function
function appendEl({name,picture,email,location,phone}){
    let body = document.getElementById("tbody");
    
    let li = document.createElement("li");

    li.innerHTML = `<li class="flex justify-between gap-x-6 py-5">
    <div class="flex min-w-0 gap-x-4">
      <img class="h-12 w-12 flex-none rounded-full bg-gray-50" src="${picture.medium}" alt="">
      <div class="min-w-0 flex-auto">
        <p class="text-sm font-semibold leading-6 text-gray-900">${name.first+" "+name.last}</p>
        <p class="mt-1 truncate text-xs leading-5 text-gray-500">${email}</p>
      </div>
    </div>
    <div class="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p class="text-sm leading-6 text-gray-900">${phone}</p>
      <p class="mt-1 text-xs leading-5 text-gray-500">lives in ${location.city}</time></p>
    </div>
  </li>`
  body.append(li);
}


