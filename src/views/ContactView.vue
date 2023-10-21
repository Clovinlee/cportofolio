<script setup>
import { ref, onMounted, onUnmounted, toDisplayString } from 'vue'

const name = ref(null);
const subject = ref(null);
const messages = ref(null);

function sendEmail(e) {
    e.preventDefault();
    let nameVal = name.value.value;
    let subjectVal = subject.value.value;
    let msgVal = messages.value.value;
    window.open('mailto:chrisantosinatra6@gmail.com?subject=' + subjectVal + '&body=Hello Chris, my name is ' + nameVal + '.%0D%0A%0D%0AI\'m trying to reach you out to talk about ' + msgVal);

}

onMounted(() => {



});

</script>

<template>
    <section id="section-project" style="overflow-y:scroll; overflow-x: hidden;" class="w-100">
        <h1 class="text-center mt-3" style="font-weight: 300;">Let's get in <b class="orange"
                style="font-weight: 600;">Touch</b>
        </h1>
        <div class="row mt-3">
            <div class="col-9 col-md-5 mx-auto">
                <div class="mb-2">
                    <small class="mx-3">Send me an <b style="font-weight: 600;" class="orange">Email</b></small>
                </div>
                <form style="border: 2px solid var(--white); border-radius: 15px;" class="p-4 d-flex flex-column">
                    <input type="text" name="" id="" placeholder="Your name" ref="name">
                    <input type="text" name="" id="" placeholder="Subject" ref="subject">
                    <textarea name="" id="" cols="30" rows="10" placeholder="Messages" ref="messages"></textarea>
                    <div class="text-end mt-1">
                        <button class="d-inline-block" @click="sendEmail">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        <p class="m-0 my-3 p-0 text-center" style="font-weight: 300;">or</p>
        <div class="row">
            <div class="col-9 col-md-5 mx-auto d-flex justify-content-center">
                <a href="https://www.linkedin.com/in/chrisanto-sinatra/" target="_blank">
                    <font-awesome-icon class="fa-icon" :icon="['fab', 'linkedin-in']" />
                </a>
                <a href="https://github.com/Clovinlee" target="_blank">
                    <font-awesome-icon class="fa-icon" :icon="['fab', 'github']" />
                </a>
                <a href="https://www.instagram.com/chrisanto_sinatra/" target="_blank">
                    <font-awesome-icon class="fa-icon" :icon="['fab', 'instagram']" />
                </a>
            </div>
        </div>
    </section>
</template>

<style scoped>
textarea {
    resize: none;
}

a {
    text-decoration: none;
    color: var(--white);
    transition: all 0.25s ease-in-out;
}

a:hover {
    color: rgb(153, 152, 152);
}

.fa-icon {
    font-size: 2rem;
    margin: 0px 10px;
    cursor: pointer;
}

button {
    background: transparent;
    border: 2px solid var(--white);
    border-radius: 15px;
    padding: 0.5rem 2rem;
    color: var(--white);
    font-weight: 400;
    cursor: pointer;
    transition: all 0.25s ease-in-out;
}

button:hover {
    background-color: var(--white);
    color: var(--darker-grey);
    font-weight: 500;
}

input,
textarea {
    background: transparent;
    border: none;
    border-bottom: 1px solid var(--white);
    color: var(--white);
    outline: none;
    padding: 0.5rem 0;
    margin-bottom: 1rem;
}

input::placeholder,
textarea::placeholder {
    color: var(--darker-white);
}

h1 {
    /* font-size: 7rem; */
    font-size: clamp(3rem, 5vw, 8rem);
}

h2 {
    /* font-size: 2rem; */
    font-size: clamp(1.5rem, 2.4vw, 3rem);
}

@media (max-width: 500px) and (min-height: 800px) {

    h1 {
        /* font-size: 7rem; */
        font-size: clamp(4rem, 8.4vw, 18rem) !important;
    }

    h2 {
        /* font-size: 2rem; */
        font-size: clamp(2rem, 3vw, 3rem);
    }
}
</style>
