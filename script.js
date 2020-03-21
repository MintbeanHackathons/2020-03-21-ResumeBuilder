addField = function(){

    $('.add').on('click', function(){
        const parent = $(this).parent().attr('class')
        const contentToAppend = parent + 'Inner'
        const placeToAppend = parent + 'Content'
        const addedContent = $(`.${contentToAppend}`).html()
        $(`.${placeToAppend}`).append(addedContent)
    })
}

const resumeBuilder = {
}

resumeBuilder.userInput = function(){
    $('button').on('click', function(event){
        event.preventDefault();
        const parts = ['basic', 'work', 'volunteer', 'education', 'award', 'publication', 'skill', 'language', 'interest', 'reference']

        
    });
}


resumeBuilder.init = function(){
    resumeBuilder.userInput()
}

$(function(){
    resumeBuilder.init();
    addField()
})