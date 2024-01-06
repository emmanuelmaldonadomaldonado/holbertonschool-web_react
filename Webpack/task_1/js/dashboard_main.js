import $ from 'jquery';
import _ from 'lodash';

$(document).ready(function() {
    // Create a paragraph element
    const paragraph = $('<p>').text('Holberton Dashboard');
    const paragraph2 = $('<p>').text('Dashboard data for the students');
    const button = $('<button>').text('Click here to get started');
    const paragraph3 = $('<p id="count"></p>');
    const paragraph4 = $('<p>').text('Copyright - Holberton School');

    // Append elements to the body
    $('body').append(paragraph);
    $('body').append(paragraph2);
    $('body').append(button);
    $('body').append(paragraph3);
    $('body').append(paragraph4);

    // Function to update the counter
    const updateCounter = _.debounce(function() {
        const count = parseInt($('#count').text()) || 0;
        $('#count').text(`${count + 1} clicks on the button`);
    }, 500);

    // Bind the debounce function to the click event on the button
    button.on('click', updateCounter);
});
