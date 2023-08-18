// dropdwn schedule
function ready()
{
    let flag = false;
    // определялки для экрана тут 
    if(innerWidth < 800)
{
  document.querySelector('body.body').classList.toggle('--mobile');
    flag = true;
}else
{
  document.querySelector('body.body').classList.toggle('--desktop');
}

    // Полифилл для метода forEach для NodeList
if (window.NodeList && !NodeList.prototype.forEach) {
	NodeList.prototype.forEach = function (callback, thisArg) {
		thisArg = thisArg || window;
		for (var i = 0; i < this.length; i++) {
			callback.call(thisArg, this[i], i, this);
		}
	};
}

document.querySelectorAll('.dropdown').forEach(function (dropDownWrapper) {
	const dropDownBtn = dropDownWrapper.querySelector('.dropdown__button');
	const dropDownList = dropDownWrapper.querySelector('.dropdown__list');
	const dropDownListItems = dropDownList.querySelectorAll('.dropdown__list-item');
	const dropDownInput = dropDownWrapper.querySelector('.dropdown__input-hidden');
	// Клик по кнопке. Открыть/Закрыть select
    if(dropDownBtn)
    {
        dropDownBtn.addEventListener('click', function (e) {
            dropDownList.classList.toggle('dropdown__list--visible');
            this.classList.toggle('dropdown__button--active');
        });
    }

    if(dropDownListItems)
    {
	// Выбор элемента списка. Запомнить выбранное значение. Закрыть дропдаун
	dropDownListItems.forEach(function (listItem) {
		listItem.addEventListener('click', function (e) {
			e.stopPropagation();
			dropDownBtn.innerText = this.innerText;
			dropDownBtn.focus();
			dropDownInput.value = this.dataset.value;
			dropDownList.classList.remove('dropdown__list--visible');
            dropDownBtn.classList.remove('dropdown__button--active');
		});
	});
    }

	// Клик снаружи дропдауна. Закрыть дропдаун
	document.addEventListener('click', function (e) {
		if (e.target !== dropDownBtn) {
            if(dropDownBtn)
            {
			dropDownBtn.classList.remove('dropdown__button--active');
            }
            if(dropDownList)
            {
			dropDownList.classList.remove('dropdown__list--visible');
            }
		}
	});

	// Нажатие на Tab или Escape. Закрыть дропдаун
	document.addEventListener('keydown', function (e) {
		if (e.key === 'Tab' || e.key === 'Escape') {
            if(dropDownBtn)
            {
			dropDownBtn.classList.remove('dropdown__button--active');
            }
            if(dropDownList)
            {
			dropDownList.classList.remove('dropdown__list--visible');
            }
		}
	});
});

    const schedulebutton = document.querySelector('.schedule__showall.--schedule');
    const coursesbutton = document.querySelector('.schedule__showall.--courses');
    const coursesmain = document.querySelector('.courses__main');
    const courseselements  = document.querySelectorAll('.courses__element');
    const scheduleoptions = document.querySelector('.schedule__options');
    const scheduleelements = document.querySelectorAll('.schedule__day');
    const mobilebutton = document.querySelector('.mobile-menu');
    const headercontent = document.querySelector('.header__content');
    const schedulefilter = document.querySelector('.schedule__filter');
    const eventbutton = document.querySelector('.schedule__showall.--events');
    const eventelements = document.querySelectorAll('.event__card--wrapper');
    if(innerWidth < 800)
    {
        if(courseselements && coursesbutton)
        {
            coursesbutton.style.cssText = 'display: block';
        }
    }
    if(coursesmain && flag)
    {

        coursesmain.addEventListener('click', (e) => {
            let cur = e.target.closest('.courses__element');
            if(cur)
            {
                [...courseselements].filter(x => x != cur).forEach(el => el.classList.remove('--tap'));
                cur.classList.toggle('--tap');
            }
        });
    }
    if(schedulefilter)
    {
    schedulefilter.addEventListener('click', () => {
        scheduleoptions.classList.toggle('--open');
    });
    }
    const body = document.querySelector('body.body');
    if(mobilebutton)
    {
        let logoimg = document.querySelector('img#logo');
    mobilebutton.addEventListener('click', () => 
    {
        headercontent.classList.toggle('--open');
        body.classList.toggle('dis-scroll');
        if(logoimg)
        {
            if(headercontent.classList.contains('--open'))
            {
                logoimg.src = 'images/logo-header-vector.svg';
            }else
            {
                logoimg.src = 'images/arenda_logo.svg';
            }
            
        }
    });
    }      

    const questions = document.querySelector('.questions__main');
    if(questions)
    {
    questions.addEventListener('click', (e) => {
        if(e.target.closest('.question__block'))
        {
            e.target.closest('.question__block').classList.toggle('--open');
        }
    });
    }
    function showAll(id, button, elements, display, text)
    {
        if(button.firstElementChild.classList.contains('--open'))
        {
            elements.forEach(el => {
                if(el.dataset.id > id)
                {
                    el.classList.toggle('--hidden');
                }
            });  
            button.firstElementChild.classList.remove('--open');
            button.firstElementChild.textContent = text;
        }else
        {
            elements.forEach(el => {
                if(el.dataset.id > id)
                {
                    el.classList.toggle('--hidden');
                    // el.style.cssText = `display: ${display}`;
                }
            });  
            button.firstElementChild.classList.add('--open');
            button.firstElementChild.textContent = "Скрыть";
        }
    }

    const schedule_wrapper = document.querySelector('.schedule-days__wrapper');
    const courses__main = document.querySelector('.courses__main');
    if(schedulebutton)
    {
        schedulebutton.addEventListener('click', () => {

            schedule_wrapper.classList.toggle('--open');
            if(schedule_wrapper.offsetHeight > 0){
                window.scrollBy({
                    top: -1 * schedule_wrapper.offsetHeight,
                    behavior : "smooth"
                  });
                // window.scrollBy(0, -1 * schedule_wrapper.offsetHeight) 
            }
            if(schedulebutton.firstElementChild.classList.contains('--open'))
            {
                schedulebutton.firstElementChild.classList.remove('--open');
                schedulebutton.firstElementChild.textContent = 'Показать всю неделю';
            }else
            {
                schedulebutton.firstElementChild.classList.add('--open');
                schedulebutton.firstElementChild.textContent = "Скрыть";
            }
        });
    }
    // if(schedulebutton)
    // {
    //     schedulebutton.addEventListener('click', () => {
    //         showAll(1, schedulebutton, scheduleelements, 'block', "Показать всю неделю")
    //     });
    // }
    if(coursesbutton)
    {

        coursesbutton.addEventListener('click', () => {

            courses__main.classList.toggle('--open');

            if(courses__main.offsetHeight > 1045){
                window.scrollBy({
                    top: -0.8 * courses__main.offsetHeight,
                    behavior : "smooth"
                  });
            }
            if(coursesbutton.firstElementChild.classList.contains('--open'))
            {
                coursesbutton.firstElementChild.classList.remove('--open');
                coursesbutton.firstElementChild.textContent = 'Показать все направления';
            }else
            {
                coursesbutton.firstElementChild.classList.add('--open');
                coursesbutton.firstElementChild.textContent = "Скрыть";
            }
            // showAll(3, coursesbutton, courseselements, 'grid', "Показать все направления")
            // document.querySelector('.courses__main').classList.toggle('--open');
        });

    }
    const event_wrapper = document.querySelector('.events-days__wrapper');
    if(eventbutton)
    {
        eventbutton.addEventListener('click', () => {
            // showAll(2, eventbutton, eventelements, 'block', "Показать больше")
                event_wrapper.classList.toggle('--open');
                if(event_wrapper.offsetHeight > 0){
                    window.scrollBy({
                        top: (-1 * event_wrapper.offsetHeight) + 140,
                        behavior : "smooth"
                      });
                    // window.scrollBy(0, -1 * schedule_wrapper.offsetHeight) 
                }
                if(eventbutton.firstElementChild.classList.contains('--open'))
                {
                    eventbutton.firstElementChild.classList.remove('--open');
                    eventbutton.firstElementChild.textContent = 'Показать всю неделю';
                }else
                {
                    eventbutton.firstElementChild.classList.add('--open');
                    eventbutton.firstElementChild.textContent = "Скрыть";
                }

        });
    }


    document.querySelectorAll('.single-course__link').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
    
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
            e.target.style.cssText = 'color: #36B9EB;';
            setTimeout(() => {e.target.style.cssText = 'color: inherit;'}, 1000);
        });
    });
}
document.addEventListener("DOMContentLoaded", ready);
