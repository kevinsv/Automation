/**
 * Get Title from page
 *
 */
module.exports = (done) => {

   let title = browser.getTitle();

   return title;

   done();

   };
