var dragAndDrop = require('html-dnd').codeForSelectors;

module.exports = {
    'Should move first todo to next todo position': function(browser) {
        browser
            .execute(dragAndDrop, ['.todo-list li:first-child', '.todo-list li:nth-child(2)'])
            .pause(500)
            .assert.containsText('.todo-list li:nth-child(2)', 'todo 1')
            .end();
    },
    'Should move last todo to first todo position': function(browser) {
        browser
            .execute(dragAndDrop, ['.todo-list li:last-child', '.todo-list li:first-child'])
            .pause(500)
            .assert.containsText('.todo-list li:first-child', 'todo 3')
            .end();
    }
}
