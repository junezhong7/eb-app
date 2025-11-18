# Emotional Balance - Children's Psychology Counseling and Behavior Support

A modern, family-friendly website for children's psychology counseling and behavior support services, inspired by Reading Eggs design.

## Setup Instructions for New PC

Follow these step-by-step instructions to run this project on a brand new computer.

### Step 1: Install Node.js

1. Open your web browser and go to: https://nodejs.org/
2. Download the **LTS (Long Term Support)** version (recommended for most users)
3. Run the downloaded installer file (e.g., `node-v20.x.x-x64.msi`)
4. Follow the installation wizard:
   - Click "Next" through all the prompts
   - Accept the license agreement
   - Keep the default installation location
   - **Important**: Make sure "Add to PATH" is checked (it should be by default)
   - Click "Install"
5. Wait for the installation to complete
6. Click "Finish"

**Verify Installation:**
- Press `Windows Key + R` to open the Run dialog
- Type `cmd` and press Enter to open Command Prompt
- Type: `node --version` and press Enter
- You should see a version number (e.g., v20.x.x)
- Type: `npm --version` and press Enter
- You should see a version number (e.g., 10.x.x)

If you see version numbers, Node.js is installed correctly! ✅

### Step 2: Get the Project Files

**Option A: If you received the project as a ZIP file:**
1. Extract the ZIP file to a location on your computer (e.g., `C:\Users\YourName\Documents\eb-app`)
2. Remember the folder location

**Option B: If you need to clone from GitHub:**
1. Download Git from: https://git-scm.com/download/win
2. Install Git using the default settings
3. Open Command Prompt (Windows Key + R, type `cmd`, press Enter)
4. Navigate to where you want the project (e.g., `cd Documents`)
5. Clone the repository: `git clone [repository-url]`
6. Navigate into the project folder: `cd eb-app`

### Step 3: Install Project Dependencies

1. Open Command Prompt (Windows Key + R, type `cmd`, press Enter)
2. Navigate to the project folder:
   - Type: `cd ` (with a space after cd)
   - Drag and drop the project folder into the Command Prompt window
   - Press Enter
   
   Or manually type the path, for example:
   ```
   cd C:\Users\YourName\Documents\eb-app
   ```

3. Install the dependencies by typing:
   ```
   npm install
   ```
4. Wait for the installation to complete (this may take a few minutes)
5. You should see a message like "added X packages" when it's done

### Step 4: Run the Development Server

1. Make sure you're still in the project folder in Command Prompt
2. Type the following command:
   ```
   npm run dev
   ```
3. Wait for the server to start. You should see a message like:
   ```
   ▲ Next.js 14.x.x
   - Local:        http://localhost:3000
   ```
4. **Keep this Command Prompt window open** - the server needs to keep running

### Step 5: View the Website

1. Open your web browser (Chrome, Edge, Firefox, etc.)
2. Go to: **http://localhost:3000**
3. You should see the website running!

### Stopping the Server

- To stop the development server, go back to the Command Prompt window
- Press `Ctrl + C`
- Type `Y` and press Enter if prompted

### Troubleshooting

**Problem: "node is not recognized"**
- Solution: Node.js is not installed or not in your PATH. Reinstall Node.js and make sure to restart Command Prompt after installation.

**Problem: "npm is not recognized"**
- Solution: Node.js installation didn't complete properly. Reinstall Node.js.

**Problem: "Cannot find module" errors**
- Solution: Make sure you ran `npm install` in the correct project folder.

**Problem: Port 3000 is already in use**
- Solution: Another program is using port 3000. Close other applications or the server will automatically use port 3001.

**Problem: The website doesn't load**
- Solution: Make sure the development server is still running in Command Prompt. Check that you're going to `http://localhost:3000` (not `https://`)

### Need Help?

If you encounter any issues:
1. Make sure all steps were completed successfully
2. Check that Node.js is installed: `node --version` in Command Prompt
3. Verify you're in the correct project folder
4. Try running `npm install` again

## Project Structure

- `/pages` - Next.js pages
- `/components` - React components
- `/styles` - CSS styles
- `/public` - Static assets

## Features

- Modern, responsive design
- Services information for children's psychology counseling
- About us section with company information
- Contact form and information
- Professional and family-friendly interface

