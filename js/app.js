const profile = new Profile();
const ui = new UI();
const searchProfile = document.querySelector('#searchProfile');

searchProfile.addEventListener('keyup',(event)=>{
    ui.clear();
    let text = event.target.value;
    if(text!==''){
        profile.getProfile(text)
        .then(profileRes =>{
            if(profileRes.profile.length > 0){
                profile.getTodoListFromProfile(profileRes.profile[0].id)
                .then(todoListRes=>{
                    ui.showProfile(profileRes.profile[0]);
                    ui.showToDo(todoListRes.todo);
                })
                .catch(err=>{console.log(err)});
            }
            else{
                ui.showAlert(text);
            }
        })
        .catch(err=>{console.log(err)});
    }
});
