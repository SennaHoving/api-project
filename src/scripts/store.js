function saveWorkout() {
  const workoutList = document.getElementById("workoutList");
  const items = workoutList.querySelectorAll("li");

  const exercises = Array.from(items).map((li) => {
    const inputs = li.querySelectorAll("input.value");
    return {
      id: li.dataset.id,
      name: li.querySelector("p")?.textContent || "",
      sets: inputs[0]?.value ?? 0,
      weight: inputs[1]?.value ?? 0,
    };
  });

  const name = prompt("Name your workout:");
  if (!name) return;

  const workout = {
    id: Date.now(),
    name,
    exercises,
  };

  const existing = JSON.parse(localStorage.getItem("workouts") ?? "[]");
  existing.push(workout);
  localStorage.setItem("workouts", JSON.stringify(existing));
  console.log("Workout saved:", workout);
}

// Save workout 
document.getElementById("saveWorkout").addEventListener("click", saveWorkout);


// sources:
// https://wslisam.medium.com/mastering-localstorage-the-unsung-hero-of-client-side-storage-1b318851ea96 