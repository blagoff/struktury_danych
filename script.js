var data = [
	{
		id: 'box1',
		title: 'First box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'special-header', 'important']
	},
	{
		id: 'box2',
		title: 'Second box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['special-header', 'important']
	},
	{
		id: 'box3',
		title: 'Third box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted', 'important']
	},
	{
		id: 'box4',
		title: 'Fourth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: ['highlighted']
	},
	{
		id: 'box5',
		title: 'Fifth box',
		content: '<p>Lorem ipsum dolor sit amet!</p>',
		categories: []
	},
]; 




var str = '';

for(var a = 0; a < data.length; a++)
{
	for(var b = 0; b < data[a].categories.length; b++)
  div = document.createElement("div");
  div.innerHTML = data[a].title;
  div.innerHTML += data[a].content;
  div.setAttribute('id',data[a].id);

  document.write(data[a].categories[b].replace(',',' '));
  div.classList.add(data[a].categories);
   document.body.appendChild(div);
}

