const testimonialsContainer = document.querySelector('.testimonials-container');
const testimonial = document.querySelector('.testimonial');
const userImage = document.querySelector('.user-image');
const username = document.querySelector('.username');
const role = document.querySelector('.role');

const testimonials = [
    {
        name: 'Miyah Myles',
        position: 'Marketing',
        photo: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: "I'have worked with literally hundreds of HTML/CSS developers and i have to say the top spot goes to this guy. This guy is an amazing developer. He stresses on good, clean code and pays need to the details. I love developers who respect each and every aspect of a throughly thought out design and do theri best to put it in code. He goes over and beyond and transforms ART into PIXELS - without a glitch, every time",
    },
    {
        name: 'June Cha',
        position: 'Software Engineer',
        photo: 'https://images.unsplash.com/photo-1560238970-cc0ae073d3a5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=435&q=80',
        text: 'This guy is an amazing frontend developer that delivered the task exactly how we need it, do your self a favor and hire him, you will not be dissaponted by the work delivered. He will go the extra mile to make sure that you are happy with your project. I will surely work again with him!',
    },
    {
        name: 'Iida Niskanen',
        position: 'Data Entry',
        photo: 'https://images.unsplash.com/photo-1597586124394-fbd6ef244026?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80',
        text: 'This guy is a hard worker. Communication was also very good with him and he was very responsive all the time, something not easy to find in many freelancers. we will definately repeat with him',
    },
    {
        name: 'Renee Sims',
        position: 'Receptionist',
        photo: 'https://images.unsplash.com/photo-1586907835000-f692bbd4c9e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=361&q=80',
        text: 'This guy does everything he can to get the job done and done right. This is the second time I have hired him, I will hire him again in the future',
    }
];

let idx = 1;

function updateTestimonial() {
    const { name, position, photo, text} =  testimonials[idx];
    testimonial.innerHTML = text;
    userImage.src = photo;
    username.innerHTML = name;
    role.innerHTML = position;

    idx++;

    if(idx > testimonials.length - 1){
        idx = 0;
    }
    
}

setInterval(updateTestimonial, 10000);

updateTestimonial();