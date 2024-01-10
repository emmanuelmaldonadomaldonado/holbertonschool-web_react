import { getFooterCopy, getFullYear, getLatestNotification } from './utils';

it('should return true for valid years', () => {
    expect(getFullYear(2024)).to.be.true;
})

it(' returns the correct string when the argument is true or fals', () => {
    expect(getFooterCopy("Holberton School")).to.be.true;
})


it('checking the returned string', () => {
    expect(getLatestNotification("<strong>Urgent requirement</strong> - complete by EOD")).to.be.true;
})
