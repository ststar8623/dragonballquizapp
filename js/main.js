var questions = [
	{
		question: 'If you met a Saiyan who wanted to challenge you to a fight, what would you do?',
		answer: [
			"Try to reason with the Saiyan, there's no need to fight.",
			"Run away, Saiyans are crazy!",
			"Fight!",
			"Mock his weird pointy hair."
		]
	},
	{
		question: 'If you were fighting someone who was a lot weaker than you, what would you do?',
		answer: [
			'Hurt him enough to make your point, then let him go.',
			'A fight is a fight, he could walk away at any time.',
			'Mess with them a little, like a cat toying with a mouse.',
			'Take them out for ice cream, they must need a friend.'
		]
	},
	{
		question: 'If you were a super Saiyan, what would you do with your powers?',
		answer: [
			'Kill evil Saiyans',
			'Kill Androids',
			'Kill whatever crosses my path',
			'Kill nothing! Just check out how buff I am in the mirror'
		]
	},
	{
		question: 'What would you do if one of your a family members was kidnapped?',
		answer: [
			'Find the kidnapper and put him in jail',
			'Send mercenaries to get him.',
			'Find the kidnapper and destroy him.',
			'Cry.'
		]
	},
	{
		question: 'You turn a corner and see your best friend getting beat up. What do you do?',
		answer: [
			'Separate your friend from the stranger and try to calm everyone down',
			'Scream for help',
			'Beat up the other guy, no hesitation',
			"Beat up your friend, he's been annoying me for a while."
		]
	},
	{
		question: 'How often do you get what you want?',
		answer: [
			"Always. It's amazing what a sweet smile can get you.",
			'Never! Things never go my way',
			"I'm the biggest, toughest guy around. Of course I get what I want.",
			"I have what I need. I'm satisfied."
		]
	},
	{
		question: 'What would you do if you were face to face with Frieza?',
		answer: [
			'Fight him...I just hope I am strong enough',
			'Destroy him!',
			'Fight and imprison him.',
			'Get killed probably, that guy is scary.'
		]
	}
]

// loop for question //
for(i = 0; i < questions.length; i++) {

	// setting variables //
	var QA = document.getElementById('questions');
	var liMain = document.createElement('li');
	var div = document.createElement('div');
		div.className = 'questions';
	var h3 = document.createElement('h3');

	var new_Q = questions[i].question;

	h3.innerText = new_Q;

	// append variable //
	div.appendChild(h3);
	liMain.appendChild(div);
	QA.appendChild(liMain);

	var ul = document.createElement('ul');
			ul.className = 'answers'

	// loop for answers //
	for(j = 0; j < questions[i].answer.length; j++) {
		var li = document.createElement('li');
			li.className = 'answer answer-radio';

		var radio = document.createElement('input');
			radio.type = 'radio';
			radio.name = "choices" + i;
			radio.className = 'radioButtons';
			radio.value = j;
			radio.id = 'choice' + j;

		var p = document.createElement('label');
			p.className = 'label';
			p.innerText = questions[i].answer[j];

		// append variables //
		li.appendChild(radio);
		li.appendChild(p);
		ul.appendChild(li);
		liMain.appendChild(ul);
	}
}

// test result
$('input[type=image]').click(function(){
	var value = $("input[type='radio']:checked").val();
	if(value == 2){
		$('.result-m_vegeta').animate({left: '30px'}, 3000);
		$('.result-m_vegeta').removeClass('hidden');
		$('#vegeta').addClass('hidden');
		$('#float2').addClass('hidden');

	} else if (value == 3){
		$('.result-m_broly').animate({left: '30px'}, 3000);
		$('.result-m_broly').removeClass('hidden');
		$('#broly').addClass('hidden');
		$('#float3').addClass('hidden');

	} else if (value == 0){
		$('.result-m_goku').animate({right: '30px'}, 3000);
		$('.result-m_goku').removeClass('hidden');
		$('#goku').addClass('hidden');

	} else if (value == 1){
		$('.result-f_bulma').animate({right: '30px'}, 3000);
		$('.result-f_bulma').removeClass('hidden');
		$('#bulma').addClass('hidden');
		$('#float').addClass('hidden');
	}
});

$('.result').click(function(){	
	$(this).addClass('hidden');
	if('.result-m_vegeta'){
		$('#vegeta').removeClass('hidden');
		$('#float2').removeClass('hidden');
	}
	if('.result-m_broly'){
		$('#broly').removeClass('hidden');
		$('#float3').removeClass('hidden');
	}
	if('.result-m_goku'){
		$('#goku').removeClass('hidden');
	} 
	if('.result-f_bulma'){
		$('#bulma').removeClass('hidden');
		$('#float').removeClass('hidden');
	}
})

// animation for hover on images //
$(document).ready(function(){
	$('#radar').mouseenter(function(){
		$(this).animate({right: '0px'}, 1000);
		$(this).addClass('animated bounce');
	})
	$('#radar').mouseleave(function(){
		$(this).animate({right: '-120px'}, 1000);
		$(this).removeClass('animated bounce');
	})
})

// sound effect //
$(document).ready(function(){
	var audioElement = document.createElement('audio');
	audioElement.setAttribute('src', 'mp3/dragonballscream.mp3');

	$.get();

	audioElement.addEventListener('load', function(){
		audioElement.play();
	}, true);

	$('#submit').click(function(){
		audioElement.play();
	});
});







