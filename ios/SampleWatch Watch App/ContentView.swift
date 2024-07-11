import SwiftUI

struct ContentView: View {
    let viewModel = AccelerometerViewModel()
    var body: some View {
        VStack {
            Text("Hello, world!")
            Button("SEND", action: {
                viewModel.sendMessage()
            })
        }
        .padding()
    }
}

struct ContentView_Previews: PreviewProvider {
    static var previews: some View {
        ContentView()
    }
}

