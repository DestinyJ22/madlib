function makeStory() {
    // get form values (2 points)
    var adjective1 = document.getElementById('adjective1').value;
    var adjective2 = document.getElementById('adjective2').value;
    var adjective3 = document.getElementById('adjective3').value;
    var noun1 = document.getElementById('noun1').value;
    var noun2 = document.getElementById('noun2').value;
    var noun3 = document.getElementById('noun3').value;
    var noun4 = document.getElementById('noun4').value;
    var verb1 = document.getElementById('verb1').value;
    var part_of_the_body1 = document.getElementById('part_of_the_body1').value;
    var part_of_the_body2 = document.getElementById('part_of_the_body2').value;
    var past_tense_verb = document.getElementById('past_tense_verb').value;
    var plural_noun1 = document.getElementById('plural_noun1').value;
    var plural_noun2 = document.getElementById('plural_noun2').value;
    var ing_verb = document.getElementById('ing_verb').value;

    // Set title of story. Use at least one form value in the title. (2 points)
    var title = "The Prom";


    // Build story. you can add as many paragraphs as you like. (3 points)
    var paragraph1 = "If there is a tune you can't seem to get out of your " + part_of_the_body1 + " or a song running through your " + part_of_the_body2 + ", then grab your friends to this year's " + adjective1 + " prom. ";
    var paragraph2 = "As ususal, our " + noun1 + " will be held in our school's " + noun2 + ". " + "A dress code will be observed. " + "No one will be allowed in wearing " + past_tense_verb + " or torn " + plural_noun1 + ". " + " Boys must wear a dress shirt and " + noun3 + " and girls must wear a  " + noun4 + ".";
    var paragraph3 = "As always, hot " + plural_noun2 + " will be served , and there will be " + adjective2 + " awards and prizes for the top- " + ing_verb + "." + " Everyone will " + verb1 + " the night away and comment on how " + adjective3 + " the prom was ";


    // Display story by putting title & paragraphs into appropriate divs. (3 points)
    document.getElementById('title').innerHTML = title;
    document.getElementById('one').innerHTML = paragraph1;
    document.getElementById('two').innerHTML = paragraph2;
    document.getElementById('three').innerHTML = paragraph3;

}
