exports.seed = (knex, __) => knex('questions')
  .del()
  .then(() => knex('questions').insert([
    {
      question_position: 1,
      question_name: 'Vem ska du gifta dig med?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'text',
    },
    {
      question_position: 2,
      question_name: 'Vad har din make/maka för personnummer?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'number',
    },
    {
      question_position: 3,
      question_name: 'Vilken adress bor din make/maka för nuvarande på? ',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'text',
    },
    {
      question_position: 4,
      question_name: 'Vilket postnummer har din make/maka?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'text',
    },
    {
      question_position: 5,
      question_name: 'Vilken ort bor din make/maka på?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'text',
    },
    {
      question_position: 6,
      question_name: 'Var vill ni gifta er?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      option_group_id: 4,
      question_type: 'radio',
    },
    {
      question_position: 7,
      question_name: 'När vill ni gifta er?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'datetime',
    },
    {
      question_position: 8,
      question_name: 'Hur många gäster kommer till er vigsel?',
      question_description: 'Ni kan som mest ha 17 gäster, inklusive barn. Även vittnen räknas som bröllopsgäst. (Inklusive barn och era vittnen).',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'number',
    },
    {
      question_position: 9,
      question_name: 'Innan ni gifter er måste Skatteverket göra en hindersprövning, för att se till att det inte finns några hinder för äktenskapet. Ni ansöker om hindersprövning genom att fylla i en blankett som ni skickar till Skatteverket. Du hittar blanketten, och mer information om hindersprövning, på Skatteverkets webbplats.',
      question_required: false,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'info',
    },
    {
      question_position: 10,
      question_name: 'Har ni intyg för hindersprövning från Skatteverket?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'radio',
    },
    {
      question_position: 11,
      question_name: 'Har ni några speciella önskemål för er vigsel?',
      question_description: 'Det kan till exempel vara musik, bla bla bla eller bla bla.',
      question_required: false,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'text',
    },
    {
      question_position: 12,
      question_name: 'Under vigseln behöver ni ha två vittnen. För att jag ska kunna boka er vigsel behöver jag några uppgifter om dem.',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'info',
    },
    {
      question_position: 13,
      question_name: 'Vad heter ert första vittne?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'text',
    },
    {
      question_position: 14,
      question_name: 'Vad heter ert andra vittne?',
      question_required: true,
      question_multiple_answers: false,
      form_id: 1,
      question_type: 'text',
    },
  ]));
