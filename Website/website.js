const moods=document.querySelectorAll('.btn')
function advisor(){
    moods.forEach(b =>{
        b.addEventListener('click',() =>{
            const id=b.id
            document.getElementById('solutions').style.background="rgba(255,255,255,.85)"
            document.getElementById('solutions').style.borderRadius = "var(--card-radius)";
            document.getElementById('solutions').style.boxShadow = "0 10px 30px rgba(31,42,68,.12)";
            document.getElementById('solutions').style.padding = "32px";
            document.getElementById('solutions').style.position = "relative";
            document.getElementById('solutions').style.marginTop = "-60px";
            
            switch(id){
                case 'happy':
                    document.getElementById('solutions').innerHTML=
                    "<h3 style='font-family:Lucida Handwriting,cursive'>It's great that you're happy</h3>"+
                    "Engage yourself in any important or likable activity to gain result to maximum productivity";
                    break;
                case 'sad':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Sad... </h3>'+
                    "Let yourself cry if it comes — it's a real release, not weakness <br>"+
                    "Put on music that matches your mood first, then gradually shift to something warmer <br>"+
                    'Text or call someone who makes you feel safe, even just to say "having a rough day" <br>'+
                    'Step outside for sunlight or fresh air, even for 5 minutes';
                    break
                case 'anx':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Anxious...</h3>'+
                    "Box breathing: inhale 4 counts, hold 4, exhale 4, hold 4 — repeat <br>"+
                    "Name 5 things you see, 4 you hear, 3 you can touch, 2 you smell, 1 you taste (grounding) <br>"+
                    'Splash cold water on your face or hold an ice cube — it shifts your nervous system quickly <br>'+
                    'Move your body — pacing, stretching, a short walk';
                    break
                case 'disg':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Disgusting...</h3>'+
                    "Wash your hands or face, or shower if possible — sometimes the feeling is partly physical <br>"+
                    "Change into fresh clothes <br>"+
                    'Open a window or step into fresh air <br>'+
                    'Do something with a pleasant smell — tea, citrus, a candle';
                    break 
                case 'angry':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Angry...</h3>'+
                    "Physical release: fast walk, punching a pillow, shaking out your hands, jumping jacks <br>"+
                    "Write it all out unfiltered, then tear up or delete the page <br>"+
                    'Growl, yell into a pillow, or make noise somewhere private <br>'+
                    'Cold water on wrists or face to bring your body temperature and heart rate down';
                    break
                case 'knot':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Experiencing Knots in Stomach...</h3>'+
                    "Slow diaphragmatic breathing — hand on belly, feel it rise and fall<br>"+
                    "Gentle self-massage on the stomach in circular motions <br>"+
                    "Child's pose or gentle forward-fold stretch <br>"+
                    'Warm compress or hot water bottle on your abdomen';
                    break
                case 'nervous':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Nervous...</h3>'+
                    'Shake out your hands and arms for 10-15 seconds — literally "shake it off" <br>'+
                    "Hum or sing something — it activates the vagus nerve and calms you <br>"+
                    "Prepare or rehearse one small piece of what's making you nervous, so you feel more in control <br>"+
                    'Slow your exhale longer than your inhale ';
                    break
                case 'over':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Are you Overthinking...</h3>'+
                    'Brain dump: write every thought down without editing, just to get it out of your head <br>'+
                    'Ask yourself: "Is this something I can act on right now?" If not, note it, set it aside, and focus on your prime goal. <br>'+
                    "Switch environments — moving to another room or outside can break the loop <br>"+
                    'Do something with your hands (engaging) to interrupt the mental loop ';
                    break
                 case 'lonely':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling lonely...</h3>'+
                    'Be your own company: cook a nice meal, watch a comfort show, or take yourself on a walk <br>'+
                    'Send a message to one person, even a simple “thinking of you” <br>'+
                    "Volunteer or help someone, which creates connection quickly <br>"+
                    'Go somewhere with gentle company, like a café, park, or library ';
                    break;
                case 'guilt':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Guilty... </h3>'+
                    "Ask yourself whether you actually did something wrong or are being too hard on yourself <br>"+
                    "If you did, apologize sincerely and think about how to repair it <br>"+
                    'Write down what you learned and what you’d do differently" <br>'+
                    'Write down what you learned and what you’d do differently';
                    break
                case 'overwhelmed':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Overwhelmed...</h3>'+
                    "Do a brain dump: write down everything on your mind <br>"+
                    "Circle the one thing that truly needs to be done first, and set the rest aside <br>"+
                    'Break that task into the smallest possible steps <br>'+
                    'Ask for help or say no to something if you can';
                    break
                case 'excited':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Overexcited...</h3>'+
                    "Channel the energy into preparation, such as planning or practicing <br>"+
                    "Move your body with a dance, a walk, or some stretching to release the extra energy"+
                    'Share the news with someone who will enjoy it with you <br>'+
                    'Slow down with a few deep breaths so you stay focused';
                    break 
                case 'bore':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling bored...</h3>'+
                    "Start a small project you’ve been putting off, such as organizing a drawer or learning a skill <br>"+
                    "Reach out to a friend or plan something to look forward to <br>"+
                    'Create something: write, doodle, photograph, or build <br>'+
                    'Try something new, like a new recipe, a podcast, or a different route on your walk';
                    break
                case 'embarrassed':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling Embarrassed...</h3>'+
                    "Take a few slow breaths and remind yourself that most people forget such moments quickly<br>"+
                    "Laugh at it if you can, since a lighthearted view often takes away the sting <br>"+
                    "Avoid replaying it, and shift your attention to something absorbing <br>"+
                    'Treat it as proof that you’re human and that you took a risk';
                    break
                case 'frus':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling frustrated...</h3>'+
                    'Step away from the problem for 5 to 10 minutes before returning to it" <br>'+
                    "Break the task into a smaller piece you can finish easily, for a quick win <br>"+
                    "Ask someone for a fresh perspective or help <br>"+
                    'Take a few slow breaths, exhaling fully, and unclench your hands and jaw ';
                    break
                case 'blank':
                    document.getElementById('solutions').innerHTML=
                    '<h3 style="font-family:Lucida Handwriting,cursive">Feeling blank...</h3>'+
                    'Splash cool water on your face or hands to bring your attention back to your body<br>'+
                    'Stretch gently or take a slow walk, noticing your feet touching the ground <br>'+
                    "Sip water or a warm drink, and eat something light if you haven’t in a while <br>"+
                    'Don’t force yourself to think or decide. Let your mind settle, and return to tasks when you feel ready';
                    break
            }
        })
    })
}
advisor();
