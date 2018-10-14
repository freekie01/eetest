package bindings;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.After;
import org.openqa.selenium.By;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import java.util.concurrent.TimeUnit;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertTrue;

public class Basket {
    WebDriver driver;

    @Given("^that i am on the booking website$")
    public void that_i_am_on_the_booking_website() throws Throwable {
        driver = new ChromeDriver();
        driver.manage().timeouts().implicitlyWait(15, TimeUnit.SECONDS);
        driver.get("http://hotel-test.equalexperts.io/");
        driver.manage().window().maximize();
    }

    @When("^i add all mandatory items$")
    public void i_add_all_mandatory_items() throws Throwable {

        driver.findElement(By.cssSelector("#firstname")).sendKeys("Fiona");
        driver.findElement(By.cssSelector("#lastname")).sendKeys("Reekie");
        driver.findElement(By.cssSelector("#totalprice")).sendKeys("100");
        driver.findElement(By.cssSelector("#checkin")).sendKeys("2018-10-30");
        driver.findElement(By.cssSelector("#checkout")).sendKeys("2018-11-05");
    }

    //  "#form .col-md-1 input[type=button]"

    @When("^i save the booking$")
    public void i_save_the_booking() throws Throwable {
        driver.findElement(By.cssSelector("#form .col-md-1 input[type=button]")).click();
    }

    @Then("^i can see the row added$")
    public void i_can_see_the_row_added() throws Throwable {
        driver.findElement(By.linkText("Cart")).click();
        assertTrue(driver.findElement(By.linkText("Cap")).isDisplayed());
        driver.findElement(By.linkText("×")).click();
        // explicit wait for item to be removed as may use AJAX
        WebDriverWait wait=new WebDriverWait(driver, 20); //explicit wait if we want to use
        WebElement returnToShopLink;
        returnToShopLink= wait.until(ExpectedConditions.visibilityOfElementLocated(By.linkText("Return to shop")));
        returnToShopLink.click();
        //driver.findElement(By.linkText("Return to shop")).click();
//        driver.quit();
    }

    @Then("^I can see the saved booking$")
    public void i_can_see_the_saved_booking() {
        //Check each field on it's own
        assertEquals("Fiona", driver.findElement(By.cssSelector("#bookings .row:last-child div:nth-of-type(2)")).getText());


                assertEquals( "Fiona\n" +
                "Reekie\n" +
                "100\n" +
                "true\n" +
                "2018-10-30\n" +
                "2018-11-05",
                        driver.findElement(By.cssSelector("#bookings .row:last-child")).getText()
                        );
    }

@After
public void teardown(){
        driver.close();
}
}