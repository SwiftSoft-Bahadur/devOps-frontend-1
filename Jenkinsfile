pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                // Checkout your Angular app source code from version control
                // Example for Git:
                git branch: 'main', url: 'https://github.com/your/angular-app-repo.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                // Install Node.js and npm (if not already installed)
                sh 'curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -'
                sh 'sudo apt-get install -y nodejs'

                // Install Angular CLI globally
                sh 'npm install -g @angular/cli'

                // Install app dependencies
                sh 'npm install'
            }
        }

        stage('Build') {
            steps {
                // Build your Angular app
                sh 'ng build --prod'
            }
        }

        stage('Deploy') {
            steps {
                // Deploy your Angular app to a web server
                // Replace this with your deployment script or commands
                // Example: Copy the build artifacts to a web server directory
                sh 'scp -r dist/* user@your-server:/path/to/web-server/public'
            }
        }
    }

    post {
        always {
            // Clean up or perform any necessary post-build actions
        }
    }
}
