class WeightedRoundRobin {
  constructor(servers) {
    this.servers = servers;
  }

  getNextServer() {
    const healthyServers = this.servers.filter(
      server => server.healthy
    );

    if (healthyServers.length === 0) {
      throw new Error("No healthy servers available");
    }

    const totalWeight = healthyServers.reduce(
      (sum, server) => sum + server.weight,
      0
    );

    let selectedServer = null;

    for (const server of healthyServers) {
      server.currentWeight += server.weight;

      if (
        selectedServer === null ||
        server.currentWeight > selectedServer.currentWeight
      ) {
        selectedServer = server;
      }
    }

    selectedServer.currentWeight -= totalWeight;

    return selectedServer;
  }
}

module.exports = WeightedRoundRobin;