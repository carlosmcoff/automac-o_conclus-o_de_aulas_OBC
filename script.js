const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the login page
  await page.goto('https://comunidade.onebitcode.com/users/sign_in?post_login_redirect=https%3A%2F%2Fcomunidade.onebitcode.com%2Ffeed#email');

  const email = await page.evaluate(() => {
    return prompt("Your email:")
  })

  const password = await page.evaluate(() => {
    return prompt("Your password:")
  })

  // Login authenticate
  await page.type("#user_email", email)
  await page.type("#user_password", password)
  await page.click("button[type='submit']")

  // Courses page
  await page.goto("https://comunidade.onebitcode.com/courses")

  const lessonUrlToStart = await page.evaluate(() => {
    return prompt("Lesson url you want to start:")
  })

  const lessonUrlToEnd = await page.evaluate(() => {
    return prompt("Lesson url you want to stop:")
  })

  // Checks if the initial lesson is smaller than the final lesson to be completed
  const getNumberLessons = () => {
    const lessonStart = lessonUrlToStart.match(/lessons\/(\d+)/)
    const lessonEnd = lessonUrlToEnd.match(/lessons\/(\d+)/)
    if (lessonStart[1] > lessonEnd[1]) return false 
    return true
  }

  if (getNumberLessons()) {
    await page.goto(lessonUrlToStart)

    // Completing lessons as specified
    while(page.url() != lessonUrlToEnd) {
      await new Promise(resolve => setTimeout(resolve, 5000)); // wait 5 seconds for concluded
      await page.click("button[type='submit']")
    }

  } else {
    await page.evaluate(() => alert("The starting lesson must be before the lesson you want to stop."))
    await browser.close()
  }
  
  await page.evaluate(() => alert("Continue your lessons, good studies!"))
  await browser.close()
})();


