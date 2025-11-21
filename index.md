# Study Buddy

## Table of contents
- [Overview](#overview)
- [User Guide](#user-guide)
- [Developer Guide](#developer-guide)

<!-- - [Mockup Pages](#mockup-pages) -->
<!-- - [Use Cases](#use-cases) -->
<!-- - [Advanced Features](#advanced-features) -->
<!-- - [Team](#team) -->

## Maintainers
- <a href="https://github.com/jazzhlam">Jazz Lam</a>
- <a href="https://github.com/Nguyenbd-code">Brandon Nguyen</a>
- <a href="https://github.com/calebzerbe">Caleb Zerbe</a>

## Team Contract
<a href="https://docs.google.com/document/d/1kHJIk9nhjPRMPwMGNicvlQ-7Rr_LjTrXq4lzIb7Tw2M/edit?usp=sharing">View Team Contract</a>

## Deployment
<a href="https://study-buddy-flax-ten.vercel.app/">View Current Website</a>

## Milestones
- Our progress is tracked using issue driven project management. Our issues (tasks) are displayed in three milestones below:
-   <a href="https://github.com/orgs/Study-Buddy-G2S6/projects/1">M1</a>
-   <a href="https://github.com/orgs/Study-Buddy-G2S6/projects/2">M2</a>
-   <a href="https://github.com/orgs/Study-Buddy-G2S6/projects/3">M3</a>

---

## Overview

### The problem
ICS students often spend more time than necessary on their homework and fail to learn as effectively as they could because they study alone and do not leverage the power of face-to-face peer study groups.

### The solution
Study Buddy is an application designed for UHM ICS students to self-organize in-person study sessions around specific courses or project topics. The platform connects students seeking help with those willing to provide assistance, helping both learn collaboratively in a structured environment.

### Goals
- Encourage use of ICSpace among ICS students.
- Minimize inappropriate encounters by requiring all meetings to occur in ICSpace.
- Promote face-to-face interaction and collaboration.
- Study Buddy focuses on real-world learning support—complementing tools like Slack and Piazza that serve asynchronous help.

---

## User Guide

### Approach
To use Study Buddy, a student logs in and sets up a profile that includes:
- Courses they’ve taken and can help with.
- Courses they’re currently taking and need help with.
- A profile photo for easy visual identification.

Each ICS course has a page displaying all students who've taken or are taking the course. Notifications are then sent to all relevant users who can RSVP.

### Study Session Options
There are two types of study sessions:
1. **Planned Session** — Schedule a group study session for later in the day or week.
2. **Immediate Help (“Right Now!”)** — Create a session happening immediately, notifying peers nearby in ICSpace for spontaneous collaboration.

### Game Mechanics
To motivate participation, Study Buddy incorporates points, levels, or leaderboards.
Admins may also distribute gift cards or rewards to top-performing students.
The challenge is to design the reward system to prevent abuse or “gaming” the system.

Admins oversee behavior and handle reports of inappropriate use.

## Guest View

<img src="" />

---

## Developer Guide

### Design Goals
- Support login, profile management, and study session scheduling.
- Display course rosters with sensei/grasshopper roles.
- Maintain a calendar view of all upcoming sessions.
- Implement admin monitoring and gamification systems.

### Technology Stack
- Bootstrap + React for the web application.
- Nextjs as the React framework.
- Typescript for backend and frontend.
- ESLint and Prettier for code standardization. 
- PostgreSQL for object-relational mapping.
- Google Calendar API for the session calendar UI.
- Slack integration for notifications.

### Key Collections
- **Profiles** — User info, photo, courses (sensei/grasshopper).
- **Courses** — List of ICS courses.
- **Sessions** — Study sessions (topic, date/time, attendees).
- **Points** — Gamification tracking (reputation, levels, rewards).
