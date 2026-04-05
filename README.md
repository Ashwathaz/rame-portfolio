# R Ramesh Khanna - Technical Support Portfolio

A professional portfolio highlighting experience as a Technical Support Associate, featuring work history, technical skills, and core competencies. Built with React and Vite.

## 🚀 Features

- **Professional Showcase**: Full display of technical support experience, skills (AWS, Cloud, Problem Solving), and projects.
- **Interactive UI**: Responsive layouts, custom CSS animations, and smooth transitions.
- **Containerized**: Ready for production deployment using Docker and Nginx.

## 🛠️ Built With

- **[React](https://react.dev/)**: Frontend library for building user interfaces.
- **[Vite](https://vitejs.dev/)**: Next-generation, lightning-fast frontend tooling.
- **[Lucide React](https://lucide.dev/)**: Beautiful, crisp, and customizable vector icons.
- **Docker & Nginx**: Built-in containerization for high-performance production serving.

## 🌩️ Deployment (After Launching an EC2/Linux Instance)

Once you have launched a cloud instance (like an AWS EC2 Ubuntu instance), connect to it via SSH and follow these instructions to deploy the portfolio.

### 1. Update System & Install Git
```bash
sudo apt-get update -y
sudo apt-get install git -y
```

### 2. Install Docker & Docker Compose
```bash
# Install Docker
sudo apt-get install docker.io -y

# Start and enable Docker service
sudo systemctl start docker
sudo systemctl enable docker

# Install Docker Compose plugin
sudo apt-get install docker-compose -y
```

### 3. Clone Repository & Deploy
```bash
# Clone your repository (Replace the URL with your actual Git repo URL)
git clone <YOUR_GITHUB_REPO_URL>
cd ramesh_portfolio

# Build and start the container in the background
sudo docker-compose up -d --build
```

**Note:** Ensure that the Security Group for your instance allows Inbound traffic on **HTTP (Port 80)**. Once the container is running and port 80 is open, you can view your deployed portfolio by typing your instance's Public IPv4 address into your browser.

## ⚙️ Local Development

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)

### Running Locally
1. Clone the repository and navigate to the project directory:
   ```bash
   cd ramesh_portfolio
   ```
2. Install the dependencies:
   ```bash
   npm install
   ```
3. Start the Vite development server:
   ```bash
   npm run dev
   ```

## 👤 Author

- **Name**: R Ramesh Khanna
- **LinkedIn**: [R Ramesh Khanna](https://www.linkedin.com/in/rameshkhannar/)
- **Email**: [rameshkhanna06.r@gmail.com](mailto:rameshkhanna06.r@gmail.com)
