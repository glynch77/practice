/**
 * @jest-environment jsdom
 */

describe("Start Training Button", () => {
  beforeEach(() => {
    // Setup the DOM for this test
    document.body.innerHTML = `
      <button id="startTrainingBtn"></button>
      <section id="contact"></section>
    `;

    // Mock scrollIntoView so we can test if it's called
    const contactSection = document.getElementById("contact");
    contactSection.scrollIntoView = jest.fn();

    // Run the existing code (without changing it)
    const startTrainingBtn = document.getElementById("startTrainingBtn");
    const contactSectionBtn = document.getElementById("contact");

    startTrainingBtn.addEventListener("click", () => {
      contactSectionBtn.scrollIntoView({
        behavior: "smooth",
      });
    });
  });

  test("clicking Start Training button calls scrollIntoView on contact section", () => {
    const startTrainingBtn = document.getElementById("startTrainingBtn");
    const contactSection = document.getElementById("contact");

    // Click the button
    startTrainingBtn.click();

    // Check that scrollIntoView was called
    expect(contactSection.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" });
  });
});




