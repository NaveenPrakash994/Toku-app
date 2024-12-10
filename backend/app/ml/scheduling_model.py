from typing import List

def generate_schedule(forecasted_calls: List[float], num_agents: int) -> List[str]:
    # Example logic to generate a simple schedule (replace with your actual scheduling model)
    schedule = []

    for i, call_volume in enumerate(forecasted_calls):
        num_agents_needed = int(call_volume / 100)  # Simple heuristic for agent count
        schedule.append(f"Hour {i + 1}: {num_agents_needed} agents")

    return schedule
