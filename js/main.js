// dropdwn schedule
function ready()
{
    const schedulebutton = document.querySelector('.schedule__showall');
    const scheduleelements = document.querySelectorAll('.schedule__day');
    const questions = document.querySelector('.questions__main');
    questions.addEventListener('click', (e) => {
        if(e.target.closest('.question__block'))
        {
            e.target.closest('.question__block').classList.toggle('--open');
        }
    });
    schedulebutton.addEventListener('click', () => {
        if(schedulebutton.firstElementChild.classList.contains('--open'))
        {
            scheduleelements.forEach(el => {
                if(el.id > 1)
                {
                    el.style.cssText = 'display: none';
                }
            });  
            schedulebutton.firstElementChild.classList.remove('--open');
            schedulebutton.firstElementChild.textContent = "Показать всю неделю";
        }else
        {
            scheduleelements.forEach(el => {
                if(el.id > 1)
                {
                    el.style.cssText = 'display: block';
                }
            });  
            schedulebutton.firstElementChild.classList.add('--open');
            schedulebutton.firstElementChild.textContent = "Скрыть";
        }

        // schedulebutton
    });
}
document.addEventListener("DOMContentLoaded", ready);



