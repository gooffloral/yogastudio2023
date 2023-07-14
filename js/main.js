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
    if(innerWidth < 550)
    {
        if(courseselements && coursesbutton)
        {
            courseselements.forEach(el => {
                if(el.dataset.id > 3)
                {
                    el.classList.toggle('--hidden');
                }
            })
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
    mobilebutton.addEventListener('click', () => 
    {
        headercontent.classList.toggle('--open');
        body.classList.toggle('dis-scroll');
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
    if(schedulebutton)
    {
        schedulebutton.addEventListener('click', () => {
            showAll(1, schedulebutton, scheduleelements, 'block', "Показать всю неделю")
        });
    }
    if(coursesbutton)
    {
        coursesbutton.addEventListener('click', () => {
            showAll(3, coursesbutton, courseselements, 'grid', "Показать все направления")
        });
    }

    console.log(eventelements);
    if(eventbutton)
    {
        eventbutton.addEventListener('click', () => {
            showAll(2, eventbutton, eventelements, 'block', "Показать больше")
        });
    }

}
document.addEventListener("DOMContentLoaded", ready);



